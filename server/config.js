/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 0,
    title: "特别奖",
    text: ""
  },
  {
    type: 1,
    count: 6,
    title: "一等奖",
    text: "",
    img: "../img/99/first.jpg"
  },
  {
    type: 2,
    count: 9,
    text: "",
    title: "二等奖",
    img: "../img/99/second.jpg"
  },
  {
    type: 3,
    count: 19,
    text: "",
    title: "三等奖",
    img: "../img/99/third.jpg"
  },
  {
    type: 4,
    count: 69,
    text: "",
    title: "幸运奖",
    img: "../img/99/lucky.jpg"
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 6, 9, 10, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "公益平台部";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
