const express = require("express");
const {
  createDoctor,
  getAllDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");

//router object
const router = express.Router();

//routes
//add Doctor POST MEthod
router.post("/create-doctor", createDoctor);
//Edit Doctor POST MEthod
router.post("/update-doctor", updateDoctor);
//Delete Doctor POST MEthod
router.post("/delete-doctor", deleteDoctor);

//get Doctors
router.post("/get-doctor", getAllDoctor);

module.exports = router;
