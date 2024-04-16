"use client"
import * as Plot from "@observablehq/plot";
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import penguins from "../../public/Data/penguins.json";
import PlotFigure from './PlotFigure';

type MiddleProps = {};

const Middle: React.FC<MiddleProps> = () => {
    return (
        <Flex height="100vh">
            <Flex height="50vh" alignItems="flex-start" justifyContent="center" ml={5} overflow="auto" mt={10}>
                <Text
                    maxWidth={200}
                    fontFamily="helvetica"
                    fontSize={20}
                >
                    Flippers and feathers – revealing the secrets of species, islands, and the peculiarities of penguin anatomy.
                </Text>
                <PlotFigure
                    options={{
                        marks: [
                            Plot.dot(penguins, {x: "culmen_length_mm", y: "culmen_depth_mm", stroke: "sex"}),
                            Plot.crosshair(penguins, {x: "culmen_length_mm", y: "culmen_depth_mm"})
                        ]
                    }}
                />
            </Flex>
            <Flex>

            </Flex>
        </Flex>
    );
}

export default Middle;
