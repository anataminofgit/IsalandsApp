import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Canvas from './IslandsCanvas';
import Islands from "./IslandsAlgo";
// import { randomIslandMatrix, findIslands } from "./Algoritm"

const DEFAULT_SIZE = 20;

const IslandsPage = () => {
    const [inputWidth, setInputWidth] = React.useState(DEFAULT_SIZE);
    const [inputHeight, setInputHeight] = React.useState(DEFAULT_SIZE);
    const [matrix, SetMatrix] = React.useState(Array(DEFAULT_SIZE).fill(Array(DEFAULT_SIZE)));
    const [draw, setDraw] = React.useState([])
    const [size, setSize] = React.useState({ col: DEFAULT_SIZE, row: DEFAULT_SIZE });
    const [islandsNum, setIslandsNum] = React.useState(null);
    const islands = new Islands();

    const handleGenrateRandom = () => {
        const maxHeight = parseInt(inputHeight);
        const maxWidht = parseInt(inputWidth);

        setSize({ row: inputHeight, col: inputWidth })

        let [mat, drawList] = islands.randomIslandMatrix(maxHeight, maxWidht);
        let drawlistMat = []
        drawlistMat[0] = [...drawList]
        setDraw(drawlistMat);
        SetMatrix(mat);
        setIslandsNum(null);
    }



    const handleSolve = () => {
        const ilands = islands.findIslands(matrix);
        setDraw(ilands);
        setIslandsNum(ilands.length);
    }


    return (
        <div>
            <Container>
                <Form>
                    <Form.Group as={Row} controlId="width">
                        <Form.Label column sm="2" >Width</Form.Label>
                        <Col sm="10">

                        <Form.Control onChange={e => { setInputWidth(e.target.value) }}
                            placeholder="width"
                            // aria-label="width"
                            // aria-describedby="width"
                            type="number"
                            value={inputWidth}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="height">
                        <Form.Label column sm="2">Height</Form.Label>
                        <Col sm="10">
                        <Form.Control onChange={e => { setInputHeight(e.target.value) }}
                            placeholder="height"
                            aria-label="height"
                            aria-describedby="height"
                            type="number"
                            value={inputHeight}
                        />
                        </Col>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Button onClick={handleGenrateRandom}>Generate Random</Button>

                        </Col>
                        <Col>
                            <Button onClick={handleSolve}>Solve</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {islandsNum !== null ? <h4>Founds {islandsNum} islands</h4> : <h4><br /></h4>}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Canvas draw={draw} matrix={matrix} width={size.col} height={size.row} />

                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default IslandsPage;
