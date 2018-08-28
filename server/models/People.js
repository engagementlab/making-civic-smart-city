/**
 * Making a Smart City
 * 
 * People page Model
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
var People = new keystone.List('People', 
	{
		label: 'People Page',
		singular: 'People Page',
		nodelete: true,
		// nocreate: true
	});

/**
 * Model Fields
 * @main People
 */
People.add({
	people: { type: Types.TextArray, label: "People", note: "Format as \"Person | Title\"" },

	createdAt: { type: Date, default: Date.now, noedit: true, hidden: true }
});

/**
 * Model Registration
 */
People.defaultSort = '-createdAt';
People.register();
