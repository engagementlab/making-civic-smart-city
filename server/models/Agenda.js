/**
 * Making a Smart City
 * 
 * Agenda page Model
 * @module index
 * @class index
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * index model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var Agenda = new keystone.List('Agenda', 
	{
		label: 'Agenda Items',
		singular: 'Agenda Item',
    autokey: { path: 'key', from: 'name', unique: true },
    sortable: true    
	});

// Storage adapter for Azure
const azureFile = new keystone.Storage({
  adapter: require('keystone-storage-adapter-azure'),
  azure: {
    container: 'smartcity',
    generateFilename: function (file) {
        // Cleanup filename
        return file.originalname.replace(/[\\'\-\[\]\/\{\}\(\)\*\+\?\\\^\$\|]/g, "").replace(/ /g, '_').toLowerCase();
    }
  },
  schema: {
    path: true,
    originalname: true,
    url: true
  }
});

/**
 * Model Fields
 * @main Agenda
 */
Agenda.add({
  name: { type: String, label: "Agenda Item Name", initial: true, required: true },
  duration: { type: Types.Number, label: "Duration (mins)", initial: true },
	blurb: { type: Types.Textarea, label: "Intro Text", initial: true, required: true },
  activity: { type: Types.Markdown, label: "Activity" },
	scenario: { type: Types.Textarea, label: "Scenario" },
  discussion: { type: Types.Markdown, label: "Discussion Questions" },
  reporting: { type: Types.Markdown, label: "Reporting" },

  pdf: { type: Types.File, label: "Activity PDF", storage: azureFile },

	createdAt: { type: Date, default: Date.now, noedit: true, hidden: true }
});

/**
 * Model Registration
 */
// Agenda.defaultSort = '-createdAt';
Agenda.register();
