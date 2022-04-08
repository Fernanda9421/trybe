'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('UserBooks', {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'user_id',
        },
        bookId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          field: 'book_id',
          references: {
            model: 'Books',
            key: 'book_id',
          }
        }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('UserBooks');
  }
};
