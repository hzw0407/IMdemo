//服务器地址
let common_url = '';
//用户登录后返回的token
let token = '';

export function fetchRequest(url,method,param = ''){
    let header = {
        "Content-Type": "application/json;charset=UTF-8",
        "accesstoken": token
    };
    if (param == '') {
        //没有参数
        return new Promise(function(resolve,reject) {
            fetch(common_url + url, {
                method: method,
                headers: header
            }).then((response) => response.json())
            .then((responseData) => {
                //请求成功返回的数据
                resolve(responseData);
            })
            .catch((err) => {
                //请求失败
                reject(err);
            });
        });
    }else{
        //有参数
        return new Promise(function(resolve,reject) {
            fetch(common_url + url, {
                method: method,
                headers: header,
                //参数转化成json字符串
                body:JSON.stringify(param)
            }).then((response) => response.json())
            .then((responseData) => {
                resolve(responseData);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }
}