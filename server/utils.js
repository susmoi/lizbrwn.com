import {knowledgeSelf} from "./knowledge.js";
import {knowledgeLizbrown} from "./knowledge.js";
import {conversationCasual} from "./example-conversations.js";

// this file adds utility functions
export function enrichWithWammy(prompt) {
    // enrich the user's prompt with context
    // so that the bot can respond more naturally

  const context = `

  This is what wammy knows about itself ${knowledgeSelf}.
  This is what wammy knows about Liz Brown ${knowledgeLizbrown}.
  This is how Wammy talks ${conversationCasual}.

  User: ${prompt}
  Wammy:

`
    return context;
}
