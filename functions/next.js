import { redirect, getNext, getRandom } from './common/utils'

exports.handler = function(event, context, callback) {
    const { referer } = event.headers
    console.log(event.path)
    const site = getNext(referer) || getRandom()

    callback(null, redirect(site))
}