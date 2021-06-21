/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [shshshfpa=b508ccf7-871b-2641-f301-a4c980546581-1610775275; shshshfpb=iUyf7KoHYJouwGoyOxPjytg==; __jdu=1623904852442451998684; areaId=13; user-key=0c9dc4d5-5b30-4f53-8321-e904a4556027; ipLoc-djd=13-1042-1051-46514; _pst=jd_64eb846214c19; unick=jd_64eb846214c19; pin=jd_64eb846214c19; _tp=xM5ROR2xUzOdPC/7KeyElTvFbrwny+oj84s7EdGesDU=; wxa_level=1; jxsid=16242732224911771546; webp=1; __jda=122270672.16242732225851306593095.1624273222.1624273222.1624273222.1; __jdc=122270672; __jdv=122270672|github.com|-|referral|-|1624273222585; mba_muid=16242732225851306593095; visitkey=46595792705200702; PPRD_P=UUID.16242732225851306593095; sc_width=400; cid=9; retina=1; __wga=1624273594594.1624273248785.1624273248785.1624273248785.3.1; jxsid_s_t=1624273594641; jxsid_s_u=https://wqs.jd.com/my/accountv2.shtml; __jdb=122270672.9.16242732225851306593095|1.1624273222; mba_sid=16242732225868768741742668547.9; shshshfp=b87b609d3ea20f21b09a817aaeef3317; shshshsID=06d42baccf0b3698f3ab9daa46ddce3c_5_1624273611873; 3AB9D23F7A4B3C9B=4DPM76JHKIWC4KSD2XH3R4VZ6EGDY2TSGK22ENQOWZ5ZXSUMK35VP6NBYHJRSWFZIEAJXERZXMD2LZVWERNFEZZU4Y; TrackerID=wtOX_ZdtwSdWYPv9qWQNRnGYAqLNDMNXigryCqNd1ZrJZxKFoHGoKy_XCweyXXz8brdnxPIeNd0pbkoZOLiZeM5obh9DEQ7I7YWCQcE2iKpr1rT9rXkxyTyaRqd2fo0T1v-fNLbAY18jnP8gn5RwxQ; pt_key=AAJg0HLhADBidCLRN8-0wDXxMy2vfWFpSFVuedR9T8u2G88GyV7JMzCctWUEFqOAElGVDgLUOTo; pt_pin=jd_64eb846214c19; pt_token=xsf63j9d; pwdt_id=jd_64eb846214c19; sfstoken=tk01me0161d14a8sMSsxKzJIa0czEEnmAgzINrvbwoTmjaQT3iCxVSO19fO6EGGLfLnbXj8MNmn+ecxH2EtoKcdDMnEr; __jd_ref_cls=MLoginRegister_LoginSuccess; wqmnx1=MDEyNjM4Ni8ubWhpZWY1NW8ueGlOQkFwdCAgY28uNiA1NWZVMlZPKSgp
 //账号一ck,例:pt_key=XXX;
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
/*
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
   // await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
   // await process.exit(0);
  })()
}
*/
CookieJDs = [...new Set(CookieJDs.filter(item => !!item))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
