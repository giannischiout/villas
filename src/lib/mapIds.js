export function mapID(id, locale) {
    if (locale === 'locale=en') {
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
export function reverseMapID(id, locale) {
    if (locale === 'locale=el') {
        return id;
    }

    let _id;
    switch (parseInt(id)) {
        case 4:
            _id = 1;
            break;
        case 5:
            _id = 2;
            break;
        case 6:
            _id = 3;
            break;
    }

    return _id;
}