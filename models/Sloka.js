const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const slokaSchema = new mongoose.Schema({
  sloka_num: { type: String, unique: true },
  sloka_text: String,
  padavibhaga: [
    {
      sl_num: Number,
      pada: String,
      sub_or_dhatu: String,
      anta: String,
      linga: String,
      sub_vachana: String,
      lakara: String,
      purusha: String,
      dhatu_vachana: String,
      atmane_or_parasmai: String,
      set_vet_anit: String,
      specific_type: String,
      word_meaning: String,
      synonyms: Array,
      visheshana_visheshya_bhava: String
    }
    ],
  literal_meaning: {
        sanskrit: String,
        english: String,
        kannada: String,
        hindi: String
      },
  sandhi:[
    {
      purvapada: String,
      uttarapada: String,
      sandhi_name: String,
      other_details: String
    }
    ],
  samasa:[
    {
      vigraha_vakya: String,
      samasa_name: String,
      other_details: String
    }
    ],
  chandas_vritta: String,
  alankara: String,
  anvaya: String,
  other_information: String,
  works_ref: String,
});

const Sloka = mongoose.model('Sloka', slokaSchema);

module.exports = Sloka;
