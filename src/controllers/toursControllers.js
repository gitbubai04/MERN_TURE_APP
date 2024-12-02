const Tour = require('../models/tourModels');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: 200,
      success: true,
      message: null,
      data: {
        totalResults: tours.length,
        tours
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      success: false,
      message: err.message
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 201,
      success: true,
      message: 'Tour created successfully',
      data: newTour
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      success: false,
      message: err.message
    });
  }
};

exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    if (!tour) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: 'Tour not found'
      });
    }

    res.status(200).json({
      status: 200,
      success: true,
      message: null,
      data: tour
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      success: false,
      message: err.message
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedTour) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: 'Tour not found'
      });
    }

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Tour updated successfully',
      data: updatedTour
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      success: false,
      message: err.message
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const deletedTour = await Tour.findByIdAndDelete(req.params.id);

    if (!deletedTour) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: 'Tour not found'
      });
    }
    res.status(200).json({
      status: 200,
      success: true,
      message: 'Tour deleted successfully'
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      success: false,
      message: err.message
    });
  }
};
