import wx from 'weixin-js-sdk';
import request from 'superagent';
import { Toast } from 'antd-mobile';
import api from '../api/wx';

const weixin = () => ({
    setConfig(data) {
        wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'openAddress',
                'scanQRCode',
                'getLocation',
                'chooseWXPay'
            ]
        });
    },
    init() {
        request.post(api.WEIXIN_API_GET)
            .withCredentials()
            .end((err, res) => {
                if (res.ok) {
                    const json = JSON.parse(res.text);
                    this.setConfig(json.data);
                } else {
                    Toast.info('获取失败');
                }
            });
    }
});

export default weixin;