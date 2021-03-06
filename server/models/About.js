/**
 * Making a Smart City
 * 
 * About page Model
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
var About = new keystone.List('About', 
	{
		label: 'About Page',
		singular: 'About Page',
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
 * @main About
 */
About.add({
  name: { type: String, default: "About Page", hidden: true },
	blurb: { type: Types.Markdown, label: "Intro Blurb Text", initial: true, required: true },
  what: { type: Types.Markdown, label: "'What We Did'", initial: true, required: true },
	whitepaperPdf: { type: Types.File, label: "Whitepaper PDF", storage: azureFile },

	createdAt: { type: Date, default: Date.now, noedit: true, hidden: true }
});

/**
 * Model Registration
 */
About.defaultSort = '-createdAt';
About.defaultColumns = 'name';
About.register();
