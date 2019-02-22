/* eslint-disable */

/**
 * @author Piyush Bhangale
 */
module.exports = {
    /**
     * Export Token.
     */
    token: process.env.token || "",
    /**
     * Export The prefix
     */
    prefix: process.env.prefix || "",
    /**
     * Export The main Guild ID Of The Server From Which Emojis have To Be Copied
     */
    main_guild_id: process.env.main_guild_id || "",
    /**
     * Export The Guild ID To Which The Emojis have To Be Added.
     */
    final_guild_id: process.env.final_guild_id || ""
}