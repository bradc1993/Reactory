import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Editor, Frame, Element } from "@craftjs/core";
import { Container } from '../components/user/Container';
import { Button } from '../components/user/Button';
import { Card, CardTop, CardBottom } from '../components/user/Card';
import { Heading } from '../components/user/Heading/Heading';
import { Text } from '../components/user/Text';
import { Video } from '../components/user/Video';
import { Song } from '../components/user/Song';
import { FreeDrag } from '../components/design/FreeDrag';
import { StyledBox } from '../components/styled/StyledBox';
import { GridRow } from '../components/layout/GridRow';
import { GridCell } from '../components/layout/GridCell';
import AutoGrid from '../components/layout/AutoGrid';
import { Landing } from '../components/layout/Landing';
import DragBox from '../components/design/DragBox';
import { ImageContainer } from '../components/user/ImageContainer';
// import Backdrop from '../components/styled/StyledBackdrop';
import lz from "lzutf8";
// import './components/filters/FilmGrain.css';

export default function Page() {
    const [json, setJson] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:3000/pages/${id}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(res => res["identifier"])
            .then(result => lz.decompress(lz.decodeBase64(result)))
            .then(result => setJson(result))
    }, []);

    return (
        <div style={{ display: 'flex', position: 'relative', margin: '0 auto', minHeight: '100vh', width: '100vw' }}>
            <Editor enabled={false} resolver={{ Card, Button, Text, Heading, Container, CardTop, CardBottom, Video, Song, FreeDrag, StyledBox, GridRow, GridCell, AutoGrid, Landing, DragBox, ImageContainer }}>
                {(json !== null) ? (
                    <Frame json={json}>

                    </Frame>
                ) : null}
            </Editor>
        </div>
    )
};