import { Wrapper } from "./style";
export default function NavBar(props: { tab: any; Fn: any }) {
  const { tab, Fn } = props; //从父组件Menu中解构出tab数据，Fn函数
  const changeTab = (tabname: any) => {
    Fn && Fn(tabname); //执行点击事件的同时通过Fn函数将tab数据传回给Menu组件
  };
  return (
    <Wrapper>
      <nav className="nav-title">菜单</nav>
      <div className="tabs-wrapper">
        <ul className="subcategories">
          {/* onClick绑定li的tab状态修改，并通过Fn函数传至Menu组件实现MVVM */}
          <li
            className={tab == "全部" ? "active" : ""}
            onClick={() => changeTab("全部")}
          >
            全部
          </li>
          <li
            className={tab == "饮料" ? "active" : ""}
            onClick={() => changeTab("饮料")}
          >
            饮料
          </li>
          <li
            className={tab == "美食" ? "active" : ""}
            onClick={() => changeTab("美食")}
          >
            美食
          </li>
          <li
            className={tab == "咖啡产品" ? "active" : ""}
            onClick={() => changeTab("咖啡产品")}
          >
            咖啡产品
          </li>
          <li
            className={tab == "商品" ? "active" : ""}
            onClick={() => changeTab("商品")}
          >
            商品
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
