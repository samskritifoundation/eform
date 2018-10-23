const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const slokaSchema = new mongoose.Schema({
  sl_num: { type: String, unique: true },
  sloka_or_gadya: String,
  sloka_text: String,
  gadya_text: String,
  padavibhaga: [
    {
      sl_num: Number,
      pada: String,
      sub_dhatu_avyaya: String,
      anta: String,
      linga: String,
      vibhakti: String,
      sub_vachana: String,
      pratipadikam: String,
      vyutpatti_nishpatti: String,
      vyutpatti_details: String,
      nishpatti_details: String,
      lakara: String,
      purusha: String,
      dhatu_vachana: String,
      atmane_or_parasmai: String,
      set_vet_anit: String,
      specific_type: String,
      root: String,
      conjugation: String,
      word_type: {
        wordtype: String,
        details: String,
        stem: String,
        sutra: String,
        meaning: String
      },
      word_meaning: {
        sanskrit: String,
        english: String,
        kannada: String,
        hindi: String
      },
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
  bhavartha: {
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
  chandas_vritta: String, // disable for gadya
  alankara: String,
  anvaya: String,
  other_information: String,
  works_ref: String,
});

const Sloka = mongoose.model('Sloka', slokaSchema);

module.exports = Sloka;
