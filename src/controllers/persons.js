import Person from '../models/Person';

export const getAllRegistered = async (req, res) => {
  try {
    const persons = await Person.find({}, {}, { sort: '-createdAt' });
    res.json({
      status: 'success',
      data: persons,
      message: 'Listado de personas',
    });
  } catch (error) {
    console.error(error);
    res.json({
      status: 'error',
      data: null,
      message: error,
    });
  }
};

export const createPerson = (req, res) => {
    try {
      const Person = new Person({ name: req.body.text, age: req.body.text });
      person.save();
      res.json({
        status: 'success',
        data: person,
        message: 'Persona agregada',
      });
    } catch (error) {
      console.error(error);
      res.json({
        status: 'error',
        data: null,
        message: error,
      });
    }
  };

  export const deletePerson = async (req, res) => {
    try {
      const deleted = await Person.findByIdAndRemove(req.params.id);
      res.json({
        status: 'success',
        data: deleted,
        message: 'Persona eliminada',
      });
    } catch (error) {
      console.error(error);
      res.json({
        status: 'error',
        data: null,
        message: error,
      });
    }
  };

  /*
  export const updatePerson = async (req, res) => {
    try {
      const update = await Person.find(req.params.id);
      res.json({
        status: 'success',
        data: update,
        message: 'Persona actualizada',
      });
    } catch (error) {
      console.error(error);
      res.json({
        status: 'error',
        data: null,
        message: error,
      });
    }
  };
*/