export default {
  state: {
    siteTitle: '返现购',
    typesNav: [
      {
        title: '文创',
        tagId: '105202082',
        image: 'https://img.yzcdn.cn/upload_files/2019/07/19/Ft8JUp5p1qu-IHmGTB5OBcOA-3-c.png!large.png',
        picture: 'https://img.yzcdn.cn/upload_files/2019/07/23/Fk6zyme0TmtTWSJ2xag_MOTJofF8.png!large.png'
      },
      {
        title: '书籍',
        tagId: '108733168',
        image: 'https://img.yzcdn.cn/upload_files/2019/07/19/FpBV5_wyt-cCsJOIP2bg1FTOQs-u.png!large.png',
        picture: 'https://img.yzcdn.cn/upload_files/2019/07/23/FjQwqWYapdUlfHE6BocWFwrkZH6U.png!large.png'
      },
      {
        title: '生活',
        tagId: '104549538',
        image: 'https://img.yzcdn.cn/upload_files/2019/07/19/Ftqc_m9bGJbqgmE7jnS4rrRLM4d-.png!large.png',
        picture: 'https://img.yzcdn.cn/upload_files/2019/07/23/FhIlVpjb7p3P2zKSAaj7uFChJEZF.png!large.png'
      },
      {
        title: '零食',
        tagId: '108868860',
        image: 'https://img.yzcdn.cn/upload_files/2019/07/19/FjuPVtQ8jzotEGZlI2spX2tKcQBg.png!large.png',
        picture: 'https://img.yzcdn.cn/upload_files/2019/07/23/Fv5ahJdLIwrnGOwanRG0eBbAKoTs.png!large.png'
      }
    ],
    filterNav: [
      {
        key: '',
        title: '综合',
      },
      {
        key: 'totalSoldNum',
        title: '销量',
        value: ['desc']
      },
      {
        key: 'activityPrice',
        title: '价格',
        value: ['asc', 'desc']
      },
      {
        key: 'createdTime',
        title: '上新',
        value: ['desc']
      }
    ]
  }
}
