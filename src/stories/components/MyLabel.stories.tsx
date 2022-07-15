import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';


//exportacion por defecto
export default {
    title: "UI/MyLabel",
    component: MyLabel,
    argTypes:{
        size: {control: 'select'},
        color: {control:'select', options: ['primary', 'secondary', 'tertiary']},
        FontColor: {control: 'color'}
    }
} as ComponentMeta <typeof MyLabel>

//construccion del componente
const template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

//historias
export const Basic = template.bind({});
Basic.args={label:'hola ', size:'normal', allCaps:false}

export const AllCaps = template.bind({});
AllCaps.args={
    size: 'normal',
    allCaps: true
}
export const Secondary = template.bind({});
Secondary.args={
    size: 'normal',
    color: 'secondary'
}
export const Terciary = template.bind({});

Terciary.args={
    size:'normal',
    color:'tertiary'
}

export const CustomFontColor = template.bind({});

CustomFontColor.args={
    FontColor: "#5517ac",
    size: 'h1'
}

export const CustomBackgroundColor = template.bind({});

CustomBackgroundColor.args={
    FontColor: "#eeeeee",
    size: 'h1',
    backgroundColor: 'black'
}

