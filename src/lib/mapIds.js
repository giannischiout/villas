export function mapID(id, locale) {
    console.log('local in mapID')
    console.log(locale)
    if (locale === 'locale=en' || locale == undefined) {
        return id;
    }

    let _id;
    switch (parseInt(id)) {
        case 1:
            _id = 4;
            break;
        case 2:
            _id = 5;
            break;
        case 3:
            _id = 6;
            break;
    }

    return _id;
}
