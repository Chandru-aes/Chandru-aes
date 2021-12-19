
export const respToJson = resp => {
    try{
        return JSON.parse(resp.data)
    }catch(e){}
    return resp.data
}

export const activeNavItem = (path) => {
    $(`ul.navbar-nav .nav-item`).removeClass("active")
    if(!path){
        $("#dash-link").addClass("active")
        return
    }
    $(`ul.navbar-nav .nav-link[href="/${path}"]`).parent().addClass("active")
}

export const getUrlParams = (param, murl = '') => {
    const url = new URL(murl === '' ? window.location.href : murl);
    return url.searchParams.get(param);
}

export const current_time = function(type) {
    /*sudo timedatectl set-timezone Asia/Kolkata*/
    let t = typeof type === 'undefined' ? '' : type;
    if(t !== '')
        t = typeof t !== 'object' ? new Date( t ) : t;
    const time = t === '' ? new Date() : t;
    const date =
        time.getFullYear() + '-' +
        ('0' + (time.getMonth() + 1)).slice(-2) + '-' +
        ('0' + time.getDate()).slice(-2);
    const format =
        ("0" + time.getHours()).slice(-2) + ":" +
        ("0" + time.getMinutes()).slice(-2) + ":" +
        ("0" + time.getSeconds()).slice(-2);
    return date+' '+format;
}