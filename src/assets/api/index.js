/**
* @file api file
* @author zhangjie
*/
import axios from 'axios';
const apiRoot = 'http://127.0.0.1/api';

function fetch(url, params = {}, method = 'get') {
    return new Promise((resolve, reject) => {
        if (method === 'get') {
            axios.get(apiRoot + url, {
                params: params
            }).then(res => {
                if (res.hasOwnProperty('data') && res.status === 200) {
                    resolve(res.data);
                } else {
                    reject();
                }
            }, reject);
        } else if (method === 'post') {
            axios.post(apiRoot + url, params).then(res => {
                if (res.hasOwnProperty('data') && res.status === 200) {
                    resolve(res.data);
                } else {
                    reject();
                }
            }, reject);
        }
    });
}
export default {
    fetchGroupList(options) {
        return fetch('list/getProjectList', options);
    },
    fetchFileList(options) {
        return fetch('list/getList', options);
    }
};
