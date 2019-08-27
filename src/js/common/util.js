var utils = {
  /*
   *  获取格式化时间
   *  type: 0 || 1, 默认为0
   *  time： 默认为调用该方法的时间
   */
  getFormatTime: function(type, time) {
    var newTime = time ? new Date(time) : new Date();
    var year = newTime.getFullYear();
    var month = newTime.getMonth();
    var day = newTime.getDate();
    var _type = type ? type : 0;

    if (_type === 0 ) {
      return year + '年' + month + '月' + day + '日';
    } else {
      return year + '-' + month + '-' + day + '-';
    }
  },
}