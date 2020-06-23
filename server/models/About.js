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


/**
 * Model Fields
 * @main About
 */
About.add({
  name: { type: String, default: "About Page", hidden: true },
	blurb: { type: Types.Markdown, label: "Intro Blurb Text", initial: true, required: true },
  what: { type: Types.Markdown, label: "'Download The Tools", initial: true, required: true },

	createdAt: { type: Date, default: Date.now, noedit: true, hidden: true }
});

/**
 * Model Registration
 */
About.defaultSort = '-createdAt';
About.defaultColumns = 'name';
About.register();
