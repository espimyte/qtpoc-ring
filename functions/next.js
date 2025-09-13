import { redirect, getNext, getRandom } from './common/utils.js'

exports.handler = function(event, context, callback) {
    const { referer } = event.headers
    try {
        console.log("url: "+event.url);
        console.log("path: "+event.path);
        console.log(new URL(event.url).searchParams.get('via'));
    } catch {
        console.log("Via param not found.")
    }
    const site = getNext(referer) || getRandom()

    callback(null, redirect(site))
}