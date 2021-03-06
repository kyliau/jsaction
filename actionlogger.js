/**
 * @fileoverview Interface for a logger used to log user interaction via
 * jsactions.
 */
goog.provide('jsaction.ActionLogger');

goog.require('jsaction.ActionFlow');

goog.scope(function() {



/**
 * Creates a no-op ActionLogger.
 *
 * @constructor
 */
jsaction.ActionLogger = function() {};

var ActionLogger = jsaction.ActionLogger;


/**
 * Logs when an action is actually dispatched. Should be invoked by handler
 * before the action is actually handled.
 *
 * @param {!jsaction.ActionFlow} actionFlow The action flow for the action.
 * @param {string=} opt_info optional string to identify information on
 *     the controller that handles the action.
 */
ActionLogger.prototype.logDispatch = function(actionFlow, opt_info) {};

});   // goog.scope
