/**
 * Making a Smart City
 * 
 * Beta Blocks page Model
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
var BetaBlocks = new keystone.List('BetaBlocks', 
	{
		label: 'Beta Blocks Page',
		singular: 'Beta Blocks Page',
		nodelete: true,
		nocreate: true
	})
	;
/**
 * Model Fields
 * @main BetaBlocks
 */
BetaBlocks.add({
	name: { type: String, default: "Beta Blocks Page", hidden: true },
	blurb: { type: Types.Markdown, label: "Intro Blurb Text", initial: true, required: true },
	what: { type: Types.Markdown, label: "'Download The Tools", initial: true, required: true },
	betaBlocksPdf: { type: Types.Url, label: "Beta Blocks PDF URL" },

	createdAt: { type: Date, default: Date.now, noedit: true, hidden: true }
});

/**
 * Model Registration
 */
BetaBlocks.defaultSort = '-createdAt';
BetaBlocks.defaultColumns = 'name';
BetaBlocks.register();
