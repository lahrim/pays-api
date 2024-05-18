var express = require("express")
var router = express.Router()

const connection = require("../config/config")


router.get("/countries", (req, res) => {
  try {
    connection.query("select * from countries", (error, data) => {
      if(error || data.length === 0) return res.json({ resultat: false })


      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/alpha2/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "" || name.length != 2) return res.json({ resultat: false })


      data = data.filter(country => country.alpha2?.toLowerCase() === name.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/alpha3/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "" || name.length != 3) return res.json({ resultat: false })


      data = data.filter(country => country.alpha3?.toLowerCase() === name.toLowerCase())


      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/tld/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "") return res.json({ resultat: false })


      data = data.filter(country => country.tld?.toLowerCase() === name.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/lang/iso/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "") return res.json({ resultat: false })


      data = data.filter(country => country.lang_iso?.toLowerCase() === name.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/lang/direction/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "") return res.json({ resultat: false })


      data = data.filter(country => country.lang_direction?.toLowerCase() === name.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/phone/indicatif/:number?", (req, res) => {
  const { number } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !number || number === "") return res.json({ resultat: false })


      data = data.filter(country => country.indicatif?.toLowerCase() === number.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/phone/length/:number?", (req, res) => {
  const { number } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !number || number === "") return res.json({ resultat: false })


      data = data.filter(country => country.phone_length?.toLowerCase() === number.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/monetary/iso/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "") return res.json({ resultat: false })


      data = data.filter(country => country.iso_4217?.toLowerCase() === name.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/fr/countries/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "") return res.json({ resultat: false })


      data = data.filter(country => country.name_fr?.toLowerCase() === name.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/fr/region/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "") return res.json({ resultat: false })


      data = data.filter(country => country.region_fr?.toLowerCase() === name.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/fr/subregion/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "") return res.json({ resultat: false })


      data = data.filter(country => country.sub_region_fr?.toLowerCase() === name.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/fr/lang/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "") return res.json({ resultat: false })


      data = data.filter(country => country.lang_fr?.toLowerCase() === name.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/en/countries/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "") return res.json({ resultat: false })


      data = data.filter(country => country.name_en?.toLowerCase() === name.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/en/region/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "") return res.json({ resultat: false })


      data = data.filter(country => country.region_en?.toLowerCase() === name.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/en/subregion/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "") return res.json({ resultat: false })


      data = data.filter(country => country.sub_region_en?.toLowerCase() === name.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


router.get("/en/lang/:name?", (req, res) => {
  const { name } = req.params


  try {
    connection.query("select * from countries", (error, data) => {
      if (error || !name || name === "") return res.json({ resultat: false })


      data = data.filter(country => country.lang_en?.toLowerCase() === name.toLowerCase())

      res.json({ resultat: true, total: data.length, data })
    })
  } catch (error) {
    res.status(500).json({ result: false })
  }
})


module.exports = router
