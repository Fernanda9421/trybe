-- MySQL Script generated by MySQL Workbench
-- ter 08 mar 2022 09:32:11
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema albuns
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema albuns
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `albuns` ;
USE `albuns` ;

-- -----------------------------------------------------
-- Table `albuns`.`artista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `albuns`.`artista` (
  `artista_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`artista_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `albuns`.`estilo_musical`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `albuns`.`estilo_musical` (
  `estilo_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`estilo_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `albuns`.`album`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `albuns`.`album` (
  `album_id` INT NOT NULL,
  `title` VARCHAR(80) NOT NULL,
  `preco` DECIMAL(5,2) NOT NULL,
  `release_year` INT NULL,
  `estilo_id` INT NOT NULL,
  `artista_id` INT NOT NULL,
  PRIMARY KEY (`album_id`),
  INDEX `artista_id_idx` (`artista_id` ASC) VISIBLE,
  INDEX `estilo_id_idx` (`estilo_id` ASC) VISIBLE,
  CONSTRAINT `artista_id`
    FOREIGN KEY (`artista_id`)
    REFERENCES `albuns`.`artista` (`artista_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `estilo_id`
    FOREIGN KEY (`estilo_id`)
    REFERENCES `albuns`.`estilo_musical` (`estilo_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `albuns`.`cancoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `albuns`.`cancoes` (
  `cancao_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(80) NOT NULL,
  `album_id` INT NOT NULL,
  PRIMARY KEY (`cancao_id`),
  CONSTRAINT `fk_cancoes_album1`
    FOREIGN KEY (`album_id`)
    REFERENCES `albuns`.`album` (`album_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;