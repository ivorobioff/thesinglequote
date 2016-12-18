var redirectId = 0;

export function redirectTo(location, historical = true){
    return {
        type: 'REDIRECT_TO',
        id: redirectId ++,
        location,
        historical
    }
}