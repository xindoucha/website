// 运行时配置
import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
} from '@ant-design/icons';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'xindoucha' };
}

export const layout = () => {
  return {
    logo: 'https://avatars.githubusercontent.com/u/49982781',
    title: 'xindoucha',
    menu: {
      locale: true,
    },
    actionsRender: (props) => {
      if (props.isMobile) return [];
      return [
        <InfoCircleFilled key="InfoCircleFilled" />,
        <QuestionCircleFilled key="QuestionCircleFilled" />,
        <GithubFilled key="GithubFilled" />,
      ];
    },
    layout: 'top',
    avatarProps: {
      src: 'https://avatars.githubusercontent.com/u/49982781',
      size: 'small',
    },
  };
};
