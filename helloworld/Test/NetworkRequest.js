//服务器地址
let common_url = '';
//用户登录后返回的token
let token = '';

/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
export function fetchRequest(url,method,param = ''){
    let header = {
        "Content-Type": "application/json;charset=UTF-8",
        "accesstoken": token
    };
    if (param == '') {
        //没有参数
        return new Promise(function(resolve,reject) {
            timeout_fetch(fetch(common_url + url, {
                method: method,
                headers: header
            })).then((response) => response.json())
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
            timeout_fetch(fetch(common_url + url, {
                method: method,
                headers: header,
                //参数转化成json字符串
                body:JSON.stringify(param)
            })).then((response) => response.json())
            .then((responseData) => {
                resolve(responseData);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }
}

/**
 * 让fetch也可以timeout
 *  timeout不是请求连接超时的含义，它表示请求的response时间，包括请求的连接、服务器处理及服务器响应回来的时间
 * fetch的timeout即使超时发生了，本次请求也不会被abort丢弃掉，它在后台仍然会发送到服务器端，只是本次请求的响应内容被丢弃而已
 * @param {Promise} fetch_promise    fetch请求返回的Promise
 * @param {number} [timeout=10000]   单位：毫秒，这里设置默认超时时间为10秒
 * @return 返回Promise
 */
function timeout_fetch(fetch_promise,timeout = 10000) {
    let timeout_fn = null; 
 
    //这是一个可以被reject的promise
    let timeout_promise = new Promise(function(resolve, reject) {
        timeout_fn = function() {
            reject('timeout promise');
        };
    });
 
    //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
    let abortable_promise = Promise.race([
        fetch_promise,
        timeout_promise
    ]);
 
    setTimeout(function() {
        timeout_fn();
    }, timeout);
 
    return abortable_promise ;
}