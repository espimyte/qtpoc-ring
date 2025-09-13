let path = require("path");
let members = require(path.resolve("./data/members.json"));

export const getVia = url => {
    try {
        console.log(new URL(req.url).searchParams.get('via'))
        const urlParams = new URLSearchParams(location.search);
        return urlParams.get('via') ?? url;
    } catch {
        console.log("Via link undefined.")
        return undefined
    }
}

export const redirect = site => {
    const statusMessage = `Redirecting to: ${site.url}`
    console.log(statusMessage)

    return {
        statusCode: 303,
        headers: { Location: site.url },
        body: statusMessage
    }
}

export const getIndex = url =>
    url ? members.findIndex(site => url.includes(site.url)) : -1

export const getNext = url => {
    url = getVia() ?? url;
    const index = getIndex(url)
    if (index !== -1) {
        const nextIndex = index < members.length - 1 ? index + 1 : 0
        return members[nextIndex]
    }
    console.log('Referrer position not found.')
    return getRandom(url)
}

export const getPrevious = url => {
    url = getVia() ?? url;
    const index = getIndex(url)
    if (index !== -1) {
        const prevIndex = index > 0 ? index - 1 : members.length - 1
        return members[prevIndex]
    }
    console.log('Referrer position not found.')
    return getRandom(url)
}

export const getRandom = url => {
    url = getVia() ?? url;
    if (members.length <= 1) 
        return members[0];
    const selection = url
        ? members.filter(site => !url.includes(site.url))
        : members
    const randomIndex = Math.floor(Math.random() * selection.length)
    return selection[randomIndex]
}