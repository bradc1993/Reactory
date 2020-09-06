import React, { useState, useEffect } from 'react';
import { useNode, useEditor } from "@craftjs/core";
import ContentEditable from 'react-contenteditable';
import { Slider, FormControl, FormLabel, Select, MenuItem } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";
import './Text.css';

export const Text = ({ text, font, fontSize, textAlign, color }) => {
    const { connectors: { connect, drag }, selected, dragged, actions: { setProp } } = useNode((state) => ({
        selected: state.events.selected,
        dragged: state.events.dragged
    }));

    const { enabled } = useEditor((state) => ({
        enabled: state.options.enabled,
      }));

    // const [editable, setEditable] = useState(false);

    // useEffect(() => {
    //     !selected && setEditable(false)
    // }, [selected]);

    return (
        <div
            ref={ref => connect(drag(ref))}
            // onClick={() => setEditable(true)}
        >
            <ContentEditable
                disabled={!enabled}
                html={text}
                onChange={e => setProp(props => props.text = e.target.value)}
                tagName={font}
                style={{ color, fontSize: `${fontSize}px`, textAlign, width: `100%` }}
            />
        </div>
    )
}

const TextSettings = () => {
    const { actions: { setProp }, font, fontSize, color } = useNode((node) => ({
        fontSize: node.data.props.fontSize,
        font: node.data.props.font,
        color: node.data.props.color
    }));

    return (
        <>
            <FormControl size="small" component="fieldset">
                <FormLabel component="legend">Font size</FormLabel>
                <Slider
                    color="secondary"
                    value={fontSize || 7}
                    step={7}
                    min={1}
                    max={50}
                    onChange={(_, value) => {
                        setProp(props => props.fontSize = value);
                    }}
                />
            </FormControl>
            <FormControl size="small" component="fieldset" margin="normal">
                <FormLabel component="legend">Font</FormLabel>
                <Select
                    id="font-select"
                    value={font}
                    onChange={(e) => {
                        setProp(props => props.font = e.target.value);
                    }}
                >
                    <MenuItem value='p'>Lora</MenuItem>
                    <MenuItem value='h6'>Raleway</MenuItem>
                </Select>
            </FormControl>
            <FormLabel component="legend">Color</FormLabel> 
            <FormControl size="small" component="fieldset" margin="normal">
                <ColorPicker
                onChange={color => {setProp(props => props.color = color)}}
                value={color}
                name='Color'
                />
            </FormControl>
        </>
    )
}


Text.craft = {
    displayName: "Text",
    props: {
        text: "Enter text here...",
        fontSize: 16,
        font: 'p'
    },
    rules: {
        canDrag: (node) => node.data.props.text !== "Drag"
    },
    related: {
        settings: TextSettings
    }
}