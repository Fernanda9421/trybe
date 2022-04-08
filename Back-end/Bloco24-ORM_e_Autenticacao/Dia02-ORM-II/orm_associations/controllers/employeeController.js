const express = require('express');
const router = express.Router();

const { Address, Employee } = require('../models');

router.get('/', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

// EAGER LOADING
// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const employee = await Employee.findOne({
//       where: { id },
//       include: [{
//         model: Address, as: 'addresses',
//         attributes: { exclude: ['number'] },
//       }],
//     });

//     if (!employee) return res.status(404).json({ message: 'Funcionário não encontrado' });

//     return res.status(200).json(employee);
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({ message: 'Ocorreu um erro' });
//   }
// });

// LAZY LOADING
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { includeAddresses } = req.query;
  
    const employee = await Employee.findOne({
      where: { id }
    });
  
    if (!employee) return res.status(404).json({ message: 'Funcionário não encontrado' });
  
    if (includeAddresses) {
      const addresses = await Address.findAll({
        where: { employeeId: id }
      });
      return res.status(200).json({ employee, addresses });
    }
  
    return res.status(200).json(employee);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
});

module.exports = router;
