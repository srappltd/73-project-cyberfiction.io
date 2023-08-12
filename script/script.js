Loco("#main")
canvas()
Anim()
Loader();

// locomotive
function Loco(main){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(main),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the main element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(main, {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(main).style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

// canvas
function canvas(){
    const canvas = document.querySelector("#cyber>canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    
    window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
    });
    
    function files(index) {
    var data = `
    img/0001.png
  img/0002.png
  img/0003.png
  img/0004.png
  img/0005.png
  img/0006.png
  img/0007.png
  img/0008.png
  img/0009.png
  img/0010.png
  img/0011.png
  img/0012.png
  img/0013.png
  img/0014.png
  img/0015.png
  img/0016.png
  img/0017.png
  img/0018.png
  img/0019.png
  img/0020.png
  img/0021.png
  img/0022.png
  img/0023.png
  img/0024.png
  img/0025.png
  img/0026.png
  img/0027.png
  img/0028.png
  img/0029.png
  img/0030.png
  img/0031.png
  img/0032.png
  img/0033.png
  img/0034.png
  img/0035.png
  img/0036.png
  img/0037.png
  img/0038.png
  img/0039.png
  img/0040.png
  img/0041.png
  img/0042.png
  img/0043.png
  img/0044.png
  img/0045.png
  img/0046.png
  img/0047.png
  img/0048.png
  img/0049.png
  img/0050.png
  img/0051.png
  img/0052.png
  img/0053.png
  img/0054.png
  img/0055.png
  img/0056.png
  img/0057.png
  img/0058.png
  img/0059.png
  img/0060.png
  img/0061.png
  img/0062.png
  img/0063.png
  img/0064.png
  img/0065.png
  img/0066.png
  img/0067.png
  img/0068.png
  img/0069.png
  img/0070.png
  img/0071.png
  img/0072.png
  img/0073.png
  img/0074.png
  img/0075.png
  img/0076.png
  img/0077.png
  img/0078.png
  img/0079.png
  img/0080.png
  img/0081.png
  img/0082.png
  img/0083.png
  img/0084.png
  img/0085.png
  img/0086.png
  img/0087.png
  img/0088.png
  img/0089.png
  img/0090.png
  img/0091.png
  img/0092.png
  img/0093.png
  img/0094.png
  img/0095.png
  img/0096.png
  img/0097.png
  img/0098.png
  img/0099.png
  img/0100.png
  img/0101.png
  img/0102.png
  img/0103.png
  img/0104.png
  img/0105.png
  img/0106.png
  img/0107.png
  img/0108.png
  img/0109.png
  img/0110.png
  img/0111.png
  img/0112.png
  img/0113.png
  img/0114.png
  img/0115.png
  img/0116.png
  img/0117.png
  img/0118.png
  img/0119.png
  img/0120.png
  img/0121.png
  img/0122.png
  img/0123.png
  img/0124.png
  img/0125.png
  img/0126.png
  img/0127.png
  img/0128.png
  img/0129.png
  img/0130.png
  img/0131.png
  img/0132.png
  img/0133.png
  img/0134.png
  img/0135.png
  img/0136.png
  img/0137.png
  img/0138.png
  img/0139.png
  img/0140.png
  img/0141.png
  img/0142.png
  img/0143.png
  img/0144.png
  img/0145.png
  img/0146.png
  img/0147.png
  img/0148.png
  img/0149.png
  img/0150.png
  img/0151.png
  img/0152.png
  img/0153.png
  img/0154.png
  img/0155.png
  img/0156.png
  img/0157.png
  img/0158.png
  img/0159.png
  img/0160.png
  img/0161.png
  img/0162.png
  img/0163.png
  img/0164.png
  img/0165.png
  img/0166.png
  img/0167.png
  img/0168.png
  img/0169.png
  img/0170.png
  img/0171.png
  img/0172.png
  img/0173.png
  img/0174.png
  img/0175.png
  img/0176.png
  img/0177.png
  img/0178.png
  img/0179.png
  img/0180.png
  img/0181.png
  img/0182.png
  img/0183.png
  img/0184.png
  img/0185.png
  img/0186.png
  img/0187.png
  img/0188.png
  img/0189.png
  img/0190.png
  img/0191.png
  img/0192.png
  img/0193.png
  img/0194.png
  img/0195.png
  img/0196.png
  img/0197.png
  img/0198.png
  img/0199.png
  img/0200.png
  img/0201.png
  img/0202.png
  img/0203.png
  img/0204.png
  img/0205.png
  img/0206.png
  img/0207.png
  img/0208.png
  img/0209.png
  img/0210.png
  img/0211.png
  img/0212.png
  img/0213.png
  img/0214.png
  img/0215.png
  img/0216.png
  img/0217.png
  img/0218.png
  img/0219.png
  img/0220.png
  img/0221.png
  img/0222.png
  img/0223.png
  img/0224.png
  img/0225.png
  img/0226.png
  img/0227.png
  img/0228.png
  img/0229.png
  img/0230.png
  img/0231.png
  img/0232.png
  img/0233.png
  img/0234.png
  img/0235.png
  img/0236.png
  img/0237.png
  img/0238.png
  img/0239.png
  img/0240.png
  img/0241.png
  img/0242.png
  img/0243.png
  img/0244.png
  img/0245.png
  img/0246.png
  img/0247.png
  img/0248.png
  img/0249.png
  img/0250.png
  img/0251.png
  img/0252.png
  img/0253.png
  img/0254.png
  img/0255.png
  img/0256.png
  img/0257.png
  img/0258.png
  img/0259.png
  img/0260.png
  img/0261.png
  img/0262.png
  img/0263.png
  img/0264.png
  img/0265.png
  img/0266.png
  img/0267.png
  img/0268.png
  img/0269.png
  img/0270.png
  img/0271.png
  img/0272.png
  img/0273.png
  img/0274.png
  img/0275.png
  img/0276.png
  img/0277.png
  img/0278.png
  img/0279.png
  img/0280.png
  img/0281.png
  img/0282.png
  img/0283.png
  img/0284.png
  img/0285.png
  img/0286.png
  img/0287.png
  img/0288.png
  img/0289.png
  img/0290.png
  img/0291.png
  img/0292.png
  img/0293.png
  img/0294.png
  img/0295.png
  img/0296.png
  img/0297.png
  img/0298.png
  img/0299.png
  img/0300.png
  img/0301.png
  img/0302.png
  img/0303.png
  img/0304.png
  img/0305.png
  img/0306.png
  img/0307.png
  img/0308.png
  img/0309.png
  img/0310.png
  img/0311.png
  img/0312.png
  img/0313.png
  img/0314.png
  img/0315.png
  img/0316.png
  img/0317.png
  img/0318.png
  img/0319.png
  img/0320.png
  img/0321.png
  img/0322.png
  img/0323.png
  img/0324.png
  img/0325.png
  img/0326.png
  img/0327.png
  img/0328.png
  img/0329.png
  img/0330.png
  img/0331.png
  img/0332.png
  img/0333.png
  img/0334.png
  img/0335.png
  img/0336.png
  img/0337.png
  img/0338.png
  img/0339.png
  img/0340.png
  img/0341.png
  img/0342.png
  img/0343.png
  img/0344.png
  img/0345.png
  img/0346.png
  img/0347.png
  img/0348.png
  img/0349.png
  img/0350.png
  img/0351.png
  img/0352.png
  img/0353.png
  img/0354.png
  img/0355.png
  img/0356.png
  img/0357.png
  img/0358.png
  img/0359.png
  img/0360.png
  img/0361.png
  img/0362.png
  img/0363.png
  img/0364.png
  img/0365.png
  img/0366.png
  img/0367.png
  img/0368.png
  img/0369.png
  img/0370.png
  img/0371.png
  img/0372.png
  img/0373.png
  img/0374.png
  img/0375.png
  img/0376.png
  img/0377.png
  img/0378.png
  img/0379.png
  img/0380.png
  img/0381.png
  img/0382.png
  img/0383.png
  img/0384.png
  img/0385.png
  img/0386.png
  img/0387.png
  img/0388.png
  img/0389.png
  img/0390.png
  img/0391.png
  img/0392.png
  img/0393.png
  img/0394.png
  img/0395.png
  img/0396.png
  img/0397.png
  img/0398.png
  img/0399.png
  img/0400.png
  img/0401.png
  img/0402.png
  img/0403.png
  img/0404.png
  img/0405.png
  img/0406.png
  img/0407.png
  img/0408.png
  img/0409.png
  img/0410.png
  img/0411.png
  img/0412.png
  img/0413.png
  img/0414.png
  img/0415.png
  img/0416.png
  img/0417.png
  img/0418.png
  img/0419.png
  img/0420.png
  img/0421.png
  img/0422.png
  img/0423.png
  img/0424.png
  img/0425.png
  img/0426.png
  img/0427.png
  img/0428.png
  img/0429.png
  img/0430.png
  img/0431.png
  img/0432.png
  img/0433.png
  img/0434.png
  img/0435.png
  img/0436.png
  img/0437.png
  img/0438.png
  img/0439.png
  img/0440.png
  img/0441.png
  img/0442.png
  img/0443.png
  img/0444.png
  img/0445.png
  img/0446.png
  img/0447.png
  img/0448.png
  img/0449.png
  img/0450.png
  img/0451.png
  img/0452.png
  img/0453.png
  img/0454.png
  img/0455.png
  img/0456.png
  img/0457.png
  img/0458.png
  img/0459.png
  img/0460.png
  img/0461.png
  img/0462.png
  img/0463.png
  img/0464.png
  img/0465.png
  img/0466.png
  img/0467.png
  img/0468.png
  img/0469.png
    `;
    return data.split("\n")[index];
    }
    
    const frameCount = 469;
    
    const images = [];
    const imageSeq = {
    frame: 1,
    };
    
    for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
    }
    
    gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: .5,
        trigger: `#cyber canvas`,
        start: `top top`,
        end: `650% top`,
        scroller: `#main`,
    },
    onUpdate: render,
    });
    
    images[1].onload = render;
    
    function render() {
    scaleImage(images[imageSeq.frame], context);
    }
    
    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
    }
    ScrollTrigger.create({
    
    trigger: "#cyber canvas",
    pin: true,
    scroller: `#main`,
    start: `-12% top`,
    end: `650% top`,
    });
}

// animation trigger
function Anim(){
  document.querySelectorAll(".page-pin").forEach(pagePin=>{
    gsap.to(pagePin,{
      scrollTrigger: {
        trigger: pagePin,
        scroller: "#main",
        start: "top 0%",
        end: "top -100%",
        // markers:true,
        pin:true
      }
    })
  })

  gsap.to(".page4-cover",{
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 0%",
      end: "top -100%",
      // markers:true,
      scrub:true
    },
    top:"-50%"
  })
  gsap.to(".page4",{
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 0%",
      end: "top -100%",
      // markers:true,
      scrub:true
    },
    top:"-100%"
  })

  
}

//loader function
function Loader(){
  setTimeout(()=>{
    document.querySelector("#loading").style.opacity=0
    setTimeout(()=>{
    document.querySelector("#loading").style.display="none"
    },1000)
  },5000)
}

