import React from "react";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function Menushka() {
    return(
        <Menu style={{width: 256}} mode="vertical">
            <SubMenu key="sub1" icon={<MailOutlined />} title="Сообщения">
                <Menu.Item key="1">Подпункт1</Menu.Item>
                <Menu.Item key="2">Подпункт2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Что-то еще">
                <Menu.Item key="4">Не нажимай</Menu.Item>
                <Menu.Item key="5">И этой тоже</Menu.Item>
                <Menu.Item key="6">Не лезь - убьет</Menu.Item>
                <SubMenu key="sub3" title="Кнопка">
                    <Menu.Item key="7">Подподпункт</Menu.Item>
                    <Menu.Item key="8">И это тоже</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="И еще что-то интересное">
                <Menu.Item key="9">Avatar</Menu.Item>
                <Menu.Item key="10">Name</Menu.Item>
                <Menu.Item key="11">Address</Menu.Item>
                <Menu.Item key="12">About</Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default Menushka;
