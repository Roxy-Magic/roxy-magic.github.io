var posts=["posts/fad0/","posts/62c6/","posts/d5a3/","posts/c7k1/","posts/o721/","posts/d839/","posts/ac30/","posts/c2de/","posts/d904/","posts/b26f/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"主题开发"},{"name":"Mo的记事簿","link":"https://blog.xiowo.net/","avatar":"https://blog.xiowo.net/img/avatar.png","descr":"万年鸽王，哈哈OvO","siteshot":"https://bu.dusays.com/2025/06/17/685044d6bca69.png","color":"speed","tag":"设计参考"},{"name":"liuts","link":"https://blog.333375.xyz/","avatar":"https://bu.dusays.com/2025/07/04/6867cad31ba62.webp","descr":"以伤疤为舟，渡人间的湍流"},{"name":"叶子的花园","link":"https://mskclover.com/","avatar":"https://bu.dusays.com/2025/07/04/6867ce3474a1e.jpg","descr":"靡不有初，鲜克有终"},{"name":"猫猫博客","link":"https://catcat.blog/","avatar":"https://bu.dusays.com/2025/10/03/68dea2c78543e.jpg","descr":"𝙄𝙩’𝙨 𝙩𝙝𝙚 𝙤𝙣𝙡𝙮 𝙉𝙀𝙀𝙏 𝙩𝙝𝙞𝙣𝙜 𝙩𝙤 𝙙𝙤…"},{"name":"时雨の一方净土🌈","link":"https://noesis.love/","avatar":"https://cn.cravatar.com/avatar/4c05da8e9690beb603a8450130c9b5c4","descr":"一个灵魂的栖息地🦖🦖🦖"},{"name":"RhoPaperの小站","link":"https://rhopaper.top/","avatar":"https://rhopaper.top/avatar.jpg","descr":"纸至执"},{"name":"晓雨","link":"https://www.coderains.cn/","avatar":"https://bu.dusays.com/2025/07/04/6867d72e8dd68.webp","descr":"喵~请抓紧我的手吧"},{"name":"晓空/宇风博客","link":"https://www.xkyfzs.top","avatar":"https://tuchuang.xkyfzs.top/img/touxiang.jpg","descr":"我的认知，远远不能超过别人的认知，向别人学习，那才是我最高的认知！"},{"name":"小明的部落格","link":"https://www.xmdblog.com/","avatar":"https://imgbed.xmdblog.com/file/OfXwydFU.jpg","descr":"探索科技，启迪技能"},{"name":"iMaeGoo’s Blog","link":"https://www.imaegoo.com","avatar":"https://cdn.jsdelivr.net/npm/imaegoo/avatar.jpg","descr":"虹墨空间站"},{"name":"🏴‍☠️浴巾的贼船🏴‍☠️","link":"https://chunyujin.top","avatar":"https://bu.dusays.com/2025/07/04/6867e42cab65d.gif","descr":"水可载舟，亦可赛艇🚤"},{"name":"Elykia","link":"https://blog.elykia.cn/","avatar":"https://bu.dusays.com/2024/10/25/671b2438203a6.gif","descr":"致以无暇之人"},{"name":"秋月の小窝","link":"https://www.7zvx.xin/","avatar":"https://bu.dusays.com/2026/05/02/69f57133b8b0f.png","descr":"一个建立于21世纪的小站，存活于互联网的边缘"},{"name":"PeterJXL","link":"https://www.peterjxl.com","avatar":"https://bu.dusays.com/2024/11/11/673228ff72bad.jpg","descr":"从 01 开始"},{"name":"bbb-lsy07","link":"https://blog.tsoo.net","avatar":"https://bu.dusays.com/2025/07/31/688b492e80fa1.jpg","descr":"科技激荡人文，洞见智慧本真。","siteshot":"https://bu.dusays.com/2025/07/31/688b497b2dbf1.webp"},{"name":"GB的记事簿","link":"https://blog.gbfun.cc/","avatar":"https://blog.gbfun.cc/img/avatar.jpg","descr":"热爱生活","siteshot":"https://blog.gbfun.cc/img/blog.gbfun.cc.jpg"},{"name":"Prorise - 博客小栈","link":"https://blog.prorisehub.com","avatar":"https://prorise-blog.oss-cn-guangzhou.aliyuncs.com/cover/avatar.png","descr":"Prorise - 一位全栈工程师分享全栈技术与实战调优"},{"name":"晚official的小站","link":"https://wanblog.qzz.io/","avatar":"https://bu.dusays.com/2026/02/27/69a180af9e980.jpg","descr":"会就是会，不会就是不会约会是什么意思"},{"name":"着火的冰块nya的小家","link":"https://zhdbk3.github.io/","avatar":"https://bu.dusays.com/2026/02/27/69a193faa34ef.png","descr":"我们终将在没有黑暗的地方相见"},{"name":"Asutaka的小站","link":"https://www.asutaka.ink/","avatar":"https://bu.dusays.com/2026/02/27/69a198af11a9c.png","descr":"黑夜给了我一双黑色眼睛，但我却用它去寻找光明"},{"name":"Damon_ZhangのBlog","link":"https://blog.damonz.cn/","avatar":"https://blog.damonz.cn/upload/avatar.jpg","descr":"于万千星光沉溺"},{"name":"Rabbit House~","link":"https://blog.kori.moe","avatar":"https://bu.dusays.com/2026/04/04/69d0d4fb86870.png","descr":"Have a cup of coffee？"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };