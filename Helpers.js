/** ============================================================================ *
    == == == == == == == == == == HELPER FUNCTIONS == == == == == == == == == ==
 ** ============================================================================ */


/**
 * Retreives just the first name of the user sending a chat's message.
 * @param {object} event The event object from Hangouts Chat.
 * @return {string} The first name from the user's chat display name.
 */
const _getFirstName = (event) => event.user.displayName.split(' ', 2)[0]

/**
  * Returns a string in titleCase.
  * @param {string} str The string to format to titleCase.
  * @return {string} The sentence in titleCase.
  */
const toTitleCase = (str) => {
    if ((str === null) || (str === '')) {
        return false
    }
    else {
        str = str.toString()
    }

    return str.replace(/\w\S*/g, (x) => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase())
}


/**
  * Creates a Chat's message card with a clickable image widget.
  * @param {string=} imgUrl An image link for the image to display.
  * @param {string} link The URL link that gets launched when the image is clicked.
  * @return {object} A chat bot card response message.
  */
const createImgCard = (
    headerTitle = 'Boop Bop Bot',
    headerSubtitle = `Lời cảm ơn từ tận đáy lòng (●'◡'●)`,
    headerImgUrl = "",
    imgUrl = "https://media.tenor.com/t_Bwtxt_Tf0AAAAM/celebration-confetti.gif",
    link = "https://finhay.com.vn/"
) => {

    const card = {
        "cards": [
            {
                "header": {
                    "title": `<u><b>${headerTitle}</b></u>`,
                    "subtitle": headerSubtitle,
                    "imageUrl": headerImgUrl
                },
                "sections": [
                    {
                        "widgets": [{
                            "image": {
                                "imageUrl": imgUrl,
                                "onClick": {
                                    "openLink": {
                                        "url": link
                                    }
                                }
                            }
                        }]
                    }
                ]
            }
        ]
    }
    return card
}