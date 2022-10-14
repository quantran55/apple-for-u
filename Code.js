/**
 * Responds to a MESSAGE event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onMessage(event) {
    const slashy = event.message.slashCommand
    let senderName = event.user.displayName
    let receiverName = event.message.annotations[1].userMention.user.displayName
    let response = Object()
    if (slashy) {
        switch (slashy.commandId) {
            case 1:
                title = receiverName + " vừa được " + senderName + " tặng táo 🍎"
                subtitle = event.message.argumentText.replace("@" + receiverName, "")
                if (!subtitle) {
                    subtitle = `Lời cảm ơn từ tận đáy lòng (●'◡'●)`
                }
                response = createImgCard(title, subtitle)
                break;

            default:
                response['text'] = "Sorry, that's not a supported slash command."
                break;
        }
    } else {
        const sayings = ["Chill bro, chill 🧊",
            "Look at you, doin' things 👀",
            "nope, no slashy enought",
            "hmmm, I don't think so",
            "Well, you tried"
        ]

        response['text'] = choose(sayings)
    }

    return response;
}

/**
 * Responds to an ADDED_TO_SPACE event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onAddToSpace(event) {
    var message = "";

    if (event.space.singleUserBotDm) {
        message = "Thank you for adding me to a DM, " + event.user.displayName + "!";
    } else {
        message = "Thank you for adding me to " +
            (event.space.displayName ? event.space.displayName : "this chat");
    }

    if (event.message) {
        // Bot added through @mention.
        message = message + " and you said: \"" + event.message.text + "\"";
    }

    return { "text": message };
}

/**
 * Responds to a REMOVED_FROM_SPACE event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onRemoveFromSpace(event) {
    console.info("Bot removed from ",
        (event.space.name ? event.space.name : "this chat"));
}

