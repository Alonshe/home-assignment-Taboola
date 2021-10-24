const config = {
  // Fetch data from the api
  fetchData: async () => {
    const api = `https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init`;
    const response = await fetch(api);
    const data = await response.json();
    return data;
  },
  // Check language for direction corrections
  checkLanguage: (word) => {
    if (/^[a-zA-Z]+$/.test(word.split(" ")[0])) {
      //if the English language
      return "english";
    } //if the not English language
    else if (/^[a-z\u0590-\u05fe]+$/i.test(word.split("")[0])) {
      return "hebrew";
    }
    // For now for default (because it's not for production)
    // We will default to English
    return "english";
  },
  // Dummy data for testing css
  DUMMY_DATA: {
    session:
      "v2_5954dc874fab1505ce6f5be85291eb75_9a925773-7f2f-41c1-88b6-7d9c8aac6c0e-tuct869b0bc_1634741052_1634741052_CNawjgYQj8BGGIbHo_HJLyABKAEwZjiI6wpAr5AQSPvT2ANQ____________AVgAYABozKazhMjGq_euAXAB",
    id: "__809d4459ff3eee67e4429d603d576fa3__252379f1d885f7b0ab01ffed9bbfe446__~~V1~~-5535809651507972456~~Jxmi_9K6ARtM77ntrb1Qvfg4D2DdFgwi2zExtsv8hdsndpXq_nTToVci-tV_1bYyPVPbFHdycXfyr1VxmozLcV7JbGFbjtizQN29Zpin8p1JlawpbYFtoRw_FVSAoDPy8yoVX_ZV1DUzrU9mgEqIxVpt34vkyVLCqQj-j_6Ik-WFwt9_72reDSrMsTKuuUo5hqVK2lOdX6dukcSozoN6a7wwrwko2biGpCtHSOZgr1aALc70pFfLu2zvkZ_V3eB_6CZCeMsXdVuB18gurmY4jO1ZDg8lbufPcttNu9_e3tf_-ydz4_t2Dfn_Gs-1XWYM,~~V1~~1393503356812237024~~XUcQwTPcLT87f1IZYkBhWKZEdrIN3Vwi9dXgZjwW78ondpXq_nTToVci-tV_1bYyPVPbFHdycXfyr1VxmozLcV7JbGFbjtizQN29Zpin8p1JlawpbYFtoRw_FVSAoDPy8yoVX_ZV1DUzrU9mgEqIxVpt34vkyVLCqQj-j_6Ik-WFwt9_72reDSrMsTKuuUo5qZYsIAYOj-PAiv0xrTcN3SbdnuH4IaJg7cKxPpcnstC0_yhhXQ9XrZ-IQncaS92UjYvq4KIIwsn0HQJsr9zry-1ZDg8lbufPcttNu9_e3tf_-ydz4_t2Dfn_Gs-1XWYM,~~V1~~-7121059241956810070~~4wWUSN7F_dMCnqxKvqFdZEYhgV-qbxz8ZSMwPTraiO3TxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQXChGM9X-dzb_zIq0r_eDVApz5mneQ3GBTkJCSt3sqDZvdNwc-KQ8HrUR5n18hwef8-jTGXsMXc6c9u4Q7cdclxCpfKIPgQgDgLJy051jkwUcriKf_MipKJPAYGvlxrJEA,~~V1~~-3258474482363688290~~9eFuAowDF94DBmsQsMSagcBX0CzV3PBUJdfnBt3EjKPTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQbccefbj2Eb7LhMfneCWHCIFWE2PpewbEqz1BXk5Ifumhd_lK_qUpz0Qi1AHThqcpfolzMOrjEt8K7hi1H-vXpL0yRS8fkSlMWa5pmAVJupWxcTw3bwyxjnJQk0rVupDprqtfNB9PSjDBlig62vbwfc,~~V1~~-7336854259142313330~~gUABfZB-hRbZ7g1brxFrAIRLs8_-Lo3L6wOTZswvmdnTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQb0tUrLUhfOp4HTOGBPc7Ukpz5mneQ3GBTkJCSt3sqDZgiLaiLTrnCuk0jndTcYJlI0QHw7oTRopVysP-EXx-LFCpfKIPgQgDgLJy051jkwUcriKf_MipKJPAYGvlxrJEA,~~V1~~4227243552636539531~~LTu6CA6WwoerzR0CsJavP9ZtbrQUvC8IIUx4GAcVhtrTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQUX1R73nBMedp4x_JX15Xngpz5mneQ3GBTkJCSt3sqDZCLT6zYKcSG5hsMNEPZ36ql3CsJyGKjVv91aA6zz45vRJ3Vjc3de0zIhoJSH_1k7BRMiMsWt_J59zH-ihmwYd_g__photo,photo,photo,text,text,text",
    ui: "rest-api",
    list: [
      {
        type: "photo",
        name: "Use Vinegar for These Home Hacks, Watch What Happens",
        created: "Thu, 03 Jun 2021 15:50:38 UTC",
        branding: "MyHealthReads.com",
        duration: "0",
        views: "0",
        thumbnail: [
          {
            url: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A%2F%2Fconsole.brax-cdn.com%2Fcreatives%2Fa6cb1edf-85ae-42d3-8ce3-0c3ef2d08771%2Fe9669e04-3a38-4349-96df-2447cd151fcb_1000x600_e031607e87897c9f961950230363b891.png",
            width: "640",
            height: "480",
          },
        ],
        categories: ["home"],
        id: "~~V1~~-5535809651507972456~~Jxmi_9K6ARtM77ntrb1Qvfg4D2DdFgwi2zExtsv8hdsndpXq_nTToVci-tV_1bYyPVPbFHdycXfyr1VxmozLcV7JbGFbjtizQN29Zpin8p1JlawpbYFtoRw_FVSAoDPy8yoVX_ZV1DUzrU9mgEqIxVpt34vkyVLCqQj-j_6Ik-WFwt9_72reDSrMsTKuuUo5hqVK2lOdX6dukcSozoN6a7wwrwko2biGpCtHSOZgr1aALc70pFfLu2zvkZ_V3eB_6CZCeMsXdVuB18gurmY4jO1ZDg8lbufPcttNu9_e3tf_-ydz4_t2Dfn_Gs-1XWYM",
        origin: "sponsored",
        url: "https://api.taboola.com/1.2/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__809d4459ff3eee67e4429d603d576fa3__252379f1d885f7b0ab01ffed9bbfe446&response.session=v2_5954dc874fab1505ce6f5be85291eb75_9a925773-7f2f-41c1-88b6-7d9c8aac6c0e-tuct869b0bc_1634741052_1634741052_CNawjgYQj8BGGIbHo_HJLyABKAEwZjiI6wpAr5AQSPvT2ANQ____________AVgAYABozKazhMjGq_euAXAB&item.id=%7E%7EV1%7E%7E-5535809651507972456%7E%7EJxmi_9K6ARtM77ntrb1Qvfg4D2DdFgwi2zExtsv8hdsndpXq_nTToVci-tV_1bYyPVPbFHdycXfyr1VxmozLcV7JbGFbjtizQN29Zpin8p1JlawpbYFtoRw_FVSAoDPy8yoVX_ZV1DUzrU9mgEqIxVpt34vkyVLCqQj-j_6Ik-WFwt9_72reDSrMsTKuuUo5hqVK2lOdX6dukcSozoN6a7wwrwko2biGpCtHSOZgr1aALc70pFfLu2zvkZ_V3eB_6CZCeMsXdVuB18gurmY4jO1ZDg8lbufPcttNu9_e3tf_-ydz4_t2Dfn_Gs-1XWYM&item.type=photo&sig=f0a370730869c1ff4fdb547e5918e1051456c98ff791&redir=https%3A%2F%2Fmyhealthreads.com%2Fvinegaruses%2F%3Futm_source%3Dtaboola%26utm_term%3Dapitestaccount_1155087%26utm_content%3D3004868413%26utm_medium%3Dreferral%26utm_campaign%3DVinegarUses-WW-DTM-MHR-TB-SB%257EMHR%23tblciGiBDfyaUihRgAaKhZ1zXoMX2qD09IZPOyawhpYVAEHUjXyDXuVEoptrFgp-n6p6LAQ&ui=9a925773-7f2f-41c1-88b6-7d9c8aac6c0e-tuct869b0bc&cpb=GAEgnP__________ASoWdGFib29sYXN5bmRpY2F0aW9uLmNvbTIId2F0ZXIwODE4gPr0KECI6wpIr5AQUPvT2ANY____________AWMI1xYQ1R8YI2RjCNIDEOAGGAhkYwiWFBCgHBgYZGMI9___________ARD3__________8BGAlkYwj0BRCLChgLZGMI4f__________ARDh__________8BGB9keAGAAaZviAGe-4XEAQ",
      },
      {
        type: "photo",
        name: "Woman Refuses To Take Bag Off Seat, Gets Taught Lesson",
        created: "Sun, 11 Jul 2021 17:04:14 UTC",
        branding: "Wanderoam",
        duration: "0",
        views: "0",
        thumbnail: [
          {
            url: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A%2F%2Fstatic.wanderoam.com%2Fwp-content%2Fuploads%2F2021%2F07%2F06131649%2FUncomfortable-Experiences-20210706131649-20210706131649.jpg",
            width: "640",
            height: "480",
          },
        ],
        categories: ["entertainment"],
        id: "~~V1~~1393503356812237024~~XUcQwTPcLT87f1IZYkBhWKZEdrIN3Vwi9dXgZjwW78ondpXq_nTToVci-tV_1bYyPVPbFHdycXfyr1VxmozLcV7JbGFbjtizQN29Zpin8p1JlawpbYFtoRw_FVSAoDPy8yoVX_ZV1DUzrU9mgEqIxVpt34vkyVLCqQj-j_6Ik-WFwt9_72reDSrMsTKuuUo5qZYsIAYOj-PAiv0xrTcN3SbdnuH4IaJg7cKxPpcnstC0_yhhXQ9XrZ-IQncaS92UjYvq4KIIwsn0HQJsr9zry-1ZDg8lbufPcttNu9_e3tf_-ydz4_t2Dfn_Gs-1XWYM",
        origin: "sponsored",
        url: "https://api.taboola.com/1.2/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__809d4459ff3eee67e4429d603d576fa3__252379f1d885f7b0ab01ffed9bbfe446&response.session=v2_5954dc874fab1505ce6f5be85291eb75_9a925773-7f2f-41c1-88b6-7d9c8aac6c0e-tuct869b0bc_1634741052_1634741052_CNawjgYQj8BGGIbHo_HJLyABKAEwZjiI6wpAr5AQSPvT2ANQ____________AVgAYABozKazhMjGq_euAXAB&item.id=%7E%7EV1%7E%7E1393503356812237024%7E%7EXUcQwTPcLT87f1IZYkBhWKZEdrIN3Vwi9dXgZjwW78ondpXq_nTToVci-tV_1bYyPVPbFHdycXfyr1VxmozLcV7JbGFbjtizQN29Zpin8p1JlawpbYFtoRw_FVSAoDPy8yoVX_ZV1DUzrU9mgEqIxVpt34vkyVLCqQj-j_6Ik-WFwt9_72reDSrMsTKuuUo5qZYsIAYOj-PAiv0xrTcN3SbdnuH4IaJg7cKxPpcnstC0_yhhXQ9XrZ-IQncaS92UjYvq4KIIwsn0HQJsr9zry-1ZDg8lbufPcttNu9_e3tf_-ydz4_t2Dfn_Gs-1XWYM&item.type=photo&sig=774897a3010c64b2762c3366542d439a04fc61c27b1b&redir=https%3A%2F%2Frfvtgb.wanderoam.com%2Fworldwide%2Fwoman-bag-seat-ta%3Futm_campaign%3Dt-wr-bag-off-s-d-ww-290821x%26utm_medium%3Dtaboola%26utm_source%3Dtaboola%26utm_term%3Dapitestaccount&ui=9a925773-7f2f-41c1-88b6-7d9c8aac6c0e-tuct869b0bc&cpb=GAEgnP__________ASoWdGFib29sYXN5bmRpY2F0aW9uLmNvbTIId2F0ZXIwODE4gPr0KECI6wpIr5AQUPvT2ANY____________AWMI1xYQ1R8YI2RjCNIDEOAGGAhkYwiWFBCgHBgYZGMI9___________ARD3__________8BGAlkYwj0BRCLChgLZGMI4f__________ARDh__________8BGB9keAGAAaZviAGe-4XEAQ",
      },
      {
        type: "photo",
        name: "China Just Bought These Major US Companies",
        created: "Sun, 23 Aug 2020 08:11:08 UTC",
        branding: "Housediver",
        duration: "0",
        views: "0",
        thumbnail: [
          {
            url: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fb96d9345b31533d7d324e5d6b678d0c0.jpg",
            width: "640",
            height: "480",
          },
        ],
        categories: ["entertainment"],
        id: "~~V1~~-7121059241956810070~~4wWUSN7F_dMCnqxKvqFdZEYhgV-qbxz8ZSMwPTraiO3TxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQXChGM9X-dzb_zIq0r_eDVApz5mneQ3GBTkJCSt3sqDZvdNwc-KQ8HrUR5n18hwef8-jTGXsMXc6c9u4Q7cdclxCpfKIPgQgDgLJy051jkwUcriKf_MipKJPAYGvlxrJEA",
        origin: "sponsored",
        url: "https://api.taboola.com/1.2/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__809d4459ff3eee67e4429d603d576fa3__252379f1d885f7b0ab01ffed9bbfe446&response.session=v2_5954dc874fab1505ce6f5be85291eb75_9a925773-7f2f-41c1-88b6-7d9c8aac6c0e-tuct869b0bc_1634741052_1634741052_CNawjgYQj8BGGIbHo_HJLyABKAEwZjiI6wpAr5AQSPvT2ANQ____________AVgAYABozKazhMjGq_euAXAB&item.id=%7E%7EV1%7E%7E-7121059241956810070%7E%7E4wWUSN7F_dMCnqxKvqFdZEYhgV-qbxz8ZSMwPTraiO3TxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQXChGM9X-dzb_zIq0r_eDVApz5mneQ3GBTkJCSt3sqDZvdNwc-KQ8HrUR5n18hwef8-jTGXsMXc6c9u4Q7cdclxCpfKIPgQgDgLJy051jkwUcriKf_MipKJPAYGvlxrJEA&item.type=photo&sig=6433e082edf8d3db1a2bf77d7389974f21265042e3e2&redir=https%3A%2F%2Frfvtgb.housediver.com%2Fworldwide%2Fcompan-ta%3Futm_medium%3Dtaboola%26utm_source%3Dtaboola%26utm_campaign%3Dta-hd-compan-bc1-des-0w-jj-05101d%26utm_term%3Dapitestaccount%26utm_bid%3DCYVWCxI9Rci1sVsGOhpPhOmqOw_fnovq1OIYSetdHC0%3D&ui=9a925773-7f2f-41c1-88b6-7d9c8aac6c0e-tuct869b0bc&cpb=GAEgnP__________ASoWdGFib29sYXN5bmRpY2F0aW9uLmNvbTIId2F0ZXIwODE4gPr0KECI6wpIr5AQUPvT2ANY____________AWMI1xYQ1R8YI2RjCNIDEOAGGAhkYwiWFBCgHBgYZGMI9___________ARD3__________8BGAlkYwj0BRCLChgLZGMI4f__________ARDh__________8BGB9keAGAAaZviAGe-4XEAQ",
      },
      {
        type: "text",
        name: "Buying a Used Car in 2020 Might Be More Rewarding Than You Think",
        created: "Sun, 25 Oct 2020 19:23:30 UTC",
        branding: "Informed Use",
        duration: "0",
        views: "0",
        thumbnail: [
          {
            url: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fede639aac54a04d61bacd82644f6ca6c.jpg",
            width: "640",
            height: "480",
          },
        ],
        id: "~~V1~~-3258474482363688290~~9eFuAowDF94DBmsQsMSagcBX0CzV3PBUJdfnBt3EjKPTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQbccefbj2Eb7LhMfneCWHCIFWE2PpewbEqz1BXk5Ifumhd_lK_qUpz0Qi1AHThqcpfolzMOrjEt8K7hi1H-vXpL0yRS8fkSlMWa5pmAVJupWxcTw3bwyxjnJQk0rVupDprqtfNB9PSjDBlig62vbwfc",
        origin: "sponsored",
        url: "https://api.taboola.com/1.2/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__809d4459ff3eee67e4429d603d576fa3__252379f1d885f7b0ab01ffed9bbfe446&response.session=v2_5954dc874fab1505ce6f5be85291eb75_9a925773-7f2f-41c1-88b6-7d9c8aac6c0e-tuct869b0bc_1634741052_1634741052_CNawjgYQj8BGGIbHo_HJLyABKAEwZjiI6wpAr5AQSPvT2ANQ____________AVgAYABozKazhMjGq_euAXAB&item.id=%7E%7EV1%7E%7E-3258474482363688290%7E%7E9eFuAowDF94DBmsQsMSagcBX0CzV3PBUJdfnBt3EjKPTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQbccefbj2Eb7LhMfneCWHCIFWE2PpewbEqz1BXk5Ifumhd_lK_qUpz0Qi1AHThqcpfolzMOrjEt8K7hi1H-vXpL0yRS8fkSlMWa5pmAVJupWxcTw3bwyxjnJQk0rVupDprqtfNB9PSjDBlig62vbwfc&item.type=text&sig=28f2a169e11a7ee499029411f074d76d67cf232138ab&redir=https%3A%2F%2Fwww.informeduse.com%2Fused-car-all%2F%3Futm_source%3Dapitestaccount%26utm_medium%3Dtaboola%26utm_campaign%3D301_inf_usedcar%26utm_content%3D2937118719%23tblciGiBDfyaUihRgAaKhZ1zXoMX2qD09IZPOyawhpYVAEHUjXyC-y0gozIfh44buk_96&ui=9a925773-7f2f-41c1-88b6-7d9c8aac6c0e-tuct869b0bc&cpb=GAEgnP__________ASoWdGFib29sYXN5bmRpY2F0aW9uLmNvbTIId2F0ZXIwODE4gPr0KECI6wpIr5AQUPvT2ANY____________AWMI1xYQ1R8YI2RjCNIDEOAGGAhkYwiWFBCgHBgYZGMI9___________ARD3__________8BGAlkYwj0BRCLChgLZGMI4f__________ARDh__________8BGB9keAGAAaZviAGe-4XEAQ",
      },
      {
        type: "text",
        name: "הנה הסמארטווצ' שכל גבר בארץ חיכה לו",
        created: "Tue, 28 Sep 2021 10:42:47 UTC",
        branding: "topgadgetadvisor.com",
        duration: "0",
        views: "0",
        thumbnail: [
          {
            url: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fc2f79e0d8a19a3a05e26d835d6eb7e57.jpg",
            width: "640",
            height: "480",
          },
        ],
        id: "~~V1~~-7336854259142313330~~gUABfZB-hRbZ7g1brxFrAIRLs8_-Lo3L6wOTZswvmdnTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQb0tUrLUhfOp4HTOGBPc7Ukpz5mneQ3GBTkJCSt3sqDZgiLaiLTrnCuk0jndTcYJlI0QHw7oTRopVysP-EXx-LFCpfKIPgQgDgLJy051jkwUcriKf_MipKJPAYGvlxrJEA",
        origin: "sponsored",
        url: "https://api.taboola.com/1.2/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__809d4459ff3eee67e4429d603d576fa3__252379f1d885f7b0ab01ffed9bbfe446&response.session=v2_5954dc874fab1505ce6f5be85291eb75_9a925773-7f2f-41c1-88b6-7d9c8aac6c0e-tuct869b0bc_1634741052_1634741052_CNawjgYQj8BGGIbHo_HJLyABKAEwZjiI6wpAr5AQSPvT2ANQ____________AVgAYABozKazhMjGq_euAXAB&item.id=%7E%7EV1%7E%7E-7336854259142313330%7E%7EgUABfZB-hRbZ7g1brxFrAIRLs8_-Lo3L6wOTZswvmdnTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQb0tUrLUhfOp4HTOGBPc7Ukpz5mneQ3GBTkJCSt3sqDZgiLaiLTrnCuk0jndTcYJlI0QHw7oTRopVysP-EXx-LFCpfKIPgQgDgLJy051jkwUcriKf_MipKJPAYGvlxrJEA&item.type=text&sig=235b5e5e08f3e8c670665cb1f28475c501c9cb16dd09&redir=https%3A%2F%2Ftopgadgetadvisor.com%2Ftactical-watch-he-t%2F%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%23tblciGiBDfyaUihRgAaKhZ1zXoMX2qD09IZPOyawhpYVAEHUjXyC0o1Qo39iF9_PogaI4&ui=9a925773-7f2f-41c1-88b6-7d9c8aac6c0e-tuct869b0bc&cpb=GAEgnP__________ASoWdGFib29sYXN5bmRpY2F0aW9uLmNvbTIId2F0ZXIwODE4gPr0KECI6wpIr5AQUPvT2ANY____________AWMI1xYQ1R8YI2RjCNIDEOAGGAhkYwiWFBCgHBgYZGMI9___________ARD3__________8BGAlkYwj0BRCLChgLZGMI4f__________ARDh__________8BGB9keAGAAaZviAGe-4XEAQ",
      },
      {
        type: "text",
        name: "השעון החכם הזה בעל הא.ק.ג סוחף את ישראל בסערה",
        created: "Wed, 29 Sep 2021 14:47:59 UTC",
        branding: "Uber Smartwatch",
        duration: "0",
        views: "0",
        thumbnail: [
          {
            url: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2F218aece67896f2eb455077f3e820a9e9.jpg",
            width: "640",
            height: "480",
          },
        ],
        id: "~~V1~~4227243552636539531~~LTu6CA6WwoerzR0CsJavP9ZtbrQUvC8IIUx4GAcVhtrTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQUX1R73nBMedp4x_JX15Xngpz5mneQ3GBTkJCSt3sqDZCLT6zYKcSG5hsMNEPZ36ql3CsJyGKjVv91aA6zz45vRJ3Vjc3de0zIhoJSH_1k7BRMiMsWt_J59zH-ihmwYd_g",
        origin: "sponsored",
        url: "https://api.taboola.com/1.2/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__809d4459ff3eee67e4429d603d576fa3__252379f1d885f7b0ab01ffed9bbfe446&response.session=v2_5954dc874fab1505ce6f5be85291eb75_9a925773-7f2f-41c1-88b6-7d9c8aac6c0e-tuct869b0bc_1634741052_1634741052_CNawjgYQj8BGGIbHo_HJLyABKAEwZjiI6wpAr5AQSPvT2ANQ____________AVgAYABozKazhMjGq_euAXAB&item.id=%7E%7EV1%7E%7E4227243552636539531%7E%7ELTu6CA6WwoerzR0CsJavP9ZtbrQUvC8IIUx4GAcVhtrTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQUX1R73nBMedp4x_JX15Xngpz5mneQ3GBTkJCSt3sqDZCLT6zYKcSG5hsMNEPZ36ql3CsJyGKjVv91aA6zz45vRJ3Vjc3de0zIhoJSH_1k7BRMiMsWt_J59zH-ihmwYd_g&item.type=text&sig=661dfa66ddb4632b10115ec419771062eb056b3d4d2f&redir=https%3A%2F%2Ftr.adoclk.com%2Fclick.php%3Fkey%3Dkft6tmtx35i0opxlhhvu%26clickid%3DGiBDfyaUihRgAaKhZ1zXoMX2qD09IZPOyawhpYVAEHUjXyDe4Ucous-NnJjf8bBF%26subid1%3D1155087%26subid2%3D12862113%26subid3%3D3036294613%26publisher_name%3Dblog.taboola.com%26zone_name%3Dapitestaccount%26ad_title%3D%25D7%2594%25D7%25A9%25D7%25A2%25D7%2595%25D7%259F%2B%25D7%2594%25D7%2597%25D7%259B%25D7%259D%2B%25D7%2594%25D7%2596%25D7%2594%2B%25D7%2591%25D7%25A2%25D7%259C%2B%25D7%2594%25D7%2590.%25D7%25A7.%25D7%2592%2B%25D7%25A1%25D7%2595%25D7%2597%25D7%25A3%2B%25D7%2590%25D7%25AA%2B%25D7%2599%25D7%25A9%25D7%25A8%25D7%2590%25D7%259C%2B%25D7%2591%25D7%25A1%25D7%25A2%25D7%25A8%25D7%2594%23tblciGiBDfyaUihRgAaKhZ1zXoMX2qD09IZPOyawhpYVAEHUjXyDe4Ucous-NnJjf8bBF&ui=9a925773-7f2f-41c1-88b6-7d9c8aac6c0e-tuct869b0bc&cpb=GAEgnP__________ASoWdGFib29sYXN5bmRpY2F0aW9uLmNvbTIId2F0ZXIwODE4gPr0KECI6wpIr5AQUPvT2ANY____________AWMI1xYQ1R8YI2RjCNIDEOAGGAhkYwiWFBCgHBgYZGMI9___________ARD3__________8BGAlkYwj0BRCLChgLZGMI4f__________ARDh__________8BGB9keAGAAaZviAGe-4XEAQ",
      },
    ],
  },
};

module.exports = {config};
