/**
 * Making a Smart City
 * 
 * Play page Model
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
var Play = new keystone.List('Play', 
	{
		label: 'Plays',
		singular: 'Play',
    autokey: { path: 'key', from: 'name', unique: true },
    sortable: true,
		nodelete: true,
		nocreate: true
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
 * @main Play
 */
Play.add({
  name: { type: String, label: "Play Name", initial: true, required: true },
	blurb: { type: Types.Textarea, label: "Blurb Text for Playbook", initial: true, required: true },
	intro: { type: Types.Textarea, label: "Intro Text", initial: true, required: true },
	discussion: { type: Types.Textarea, label: "Discussion Text", initial: true, required: true },
	actionIdeas: { type: Types.Markdown, label: "Action Ideas", initial: true, required: true },

  pdf: { type: Types.File, label: "Play PDF", storage: azureFile },

	createdAt: { type: Date, default: Date.now, noedit: true, hidden: true }
});

/**
 * Model Registration
 */
Play.register();
