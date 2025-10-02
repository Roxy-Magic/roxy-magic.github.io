var posts=["posts/fad0/","posts/62c6/","posts/d839/","posts/ac30/","posts/b26f/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"主题开发"},{"name":"liuts","link":"https://blog.333375.xyz/","avatar":"https://bu.dusays.com/2025/07/04/6867cad31ba62.webp","descr":"以伤疤为舟，渡人间的湍流"},{"name":"叶子的花园","link":"https://mskclover.com/","avatar":"https://bu.dusays.com/2025/07/04/6867ce3474a1e.jpg","descr":"靡不有初，鲜克有终","recommend":true},{"name":"猫猫博客","link":"https://catcat.blog/","avatar":"https://catcat.blog/wp-content/uploads/2024/09/cropped-Avatar.webp","descr":"𝙄𝙩’𝙨 𝙩𝙝𝙚 𝙤𝙣𝙡𝙮 𝙉𝙀𝙀𝙏 𝙩𝙝𝙞𝙣𝙜 𝙩𝙤 𝙙𝙤…"},{"name":"RhoPaperの小站","link":"https://rhopaper.top/","avatar":"https://rhopaper.top/avatar.jpg","descr":"纸至执"},{"name":"桜庭夜","link":"https://yuuikic.com","avatar":"https://yuuikic.com/avatar/787f3e0552ca378a4ec72b41b99ddaf8?size=512","descr":"悠哉日常大王"},{"name":"晓雨","link":"https://www.coderains.cn/","avatar":"https://bu.dusays.com/2025/07/04/6867d72e8dd68.webp","descr":"喵~请抓紧我的手吧"},{"name":"时雨の一方净土🌈","link":"https://noesis.love/","avatar":"https://npm.elemecdn.com/noesis.img/img/IDqHt.webp","descr":"一个灵魂的栖息地🦖🦖🦖"},{"name":"晓空/宇风博客","link":"https://www.xkyfzs.top","avatar":"https://tuchuang.xkyfzs.top/img/touxiang.jpg","descr":"我的认知，远远不能超过别人的认知，向别人学习，那才是我最高的认知！"},{"name":"小明的部落格","link":"https://www.xmdblog.com/","avatar":"https://imgbed.xmdblog.com/file/OfXwydFU.jpg","descr":"探索科技，启迪技能"},{"name":"iMaeGoo’s Blog","link":"https://www.imaegoo.com","avatar":"https://cdn.jsdelivr.net/npm/imaegoo/avatar.jpg","descr":"虹墨空间站","recommend":true},{"name":"🏴‍☠️浴巾的贼船🏴‍☠️","link":"https://chunyujin.top","avatar":"https://bu.dusays.com/2025/07/04/6867e42cab65d.gif","descr":"水可载舟，亦可赛艇🚤"},{"name":"Elykia","link":"https://blog.elykia.cn/","avatar":"https://bu.dusays.com/2024/10/25/671b2438203a6.gif","descr":"致以无暇之人"},{"name":"秋月の小窝","link":"https://www.7zvx.xin/","avatar":"https://www.7zvx.xin/upload/aff7f879-1196-481b-8684-d1ff412cc50a.png","descr":"一个建立于21世纪的小站，存活于互联网的边缘"},{"name":"PeterJXL","link":"https://www.peterjxl.com","avatar":"https://bu.dusays.com/2024/11/11/673228ff72bad.jpg","descr":"从 01 开始"},{"name":"清欲の小窝","link":"https://blog.leoo.fun","avatar":"https://bu.dusays.com/2024/11/11/6731ad4c16396.jpg","descr":"沙雕网友清欲的碎碎念"},{"name":"bbb-lsy07","link":"https://blog.6uu.us/","avatar":"https://bu.dusays.com/2025/07/31/688b492e80fa1.jpg","descr":"科技激荡人文，洞见智慧本真。","siteshot":"https://bu.dusays.com/2025/07/31/688b497b2dbf1.webp"},{"name":"Rabbit House~","link":"https://blog.chino.mom","avatar":"https://blog.chino.mom/logo.png","descr":"Have a cup of coffee？"}];
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