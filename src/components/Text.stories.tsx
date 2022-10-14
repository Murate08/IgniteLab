import {Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from "./Text";

export default {
    title:'Components/Text',
    component:Text,
    args:{
        children:'Lorem ipsom',
        size:'md'
    },
    argTypes:{
        size:{
            option:['sm', 'md', 'lg'],
            control:{
                type:'inline-radio'
            }
        }
    }
    
} as Meta

export const Default:StoryObj<TextProps> = {
    

}

export const Smal:StoryObj<TextProps> = {
    args:{
        size:'sm'
    }

}

export const Large:StoryObj<TextProps> = {
    args:{
        size:'lg'
    }

}

export const CustomComponent:StoryObj<TextProps> = {
    args:{
        asChild: true,
        children:(
            <p>Text with paragraph tag</p>
        )
    },
    argTypes:{
        children:{
            table:{
                disable:true,
            }
        },
        asChild:{
            table:{
                disable:true,
            }
        }
    }

}