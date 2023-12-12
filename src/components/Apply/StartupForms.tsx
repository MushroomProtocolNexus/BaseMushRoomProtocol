import React from 'react';
import {
  Box,
  Center,
  Flex,
  Button,
  Text,
  Heading,
  Icon,
  Fade,
  useDisclosure,
  FormControl,
  FormLabel,
  Collapse,
  Input,
  Select,
  Textarea,
  FormHelperText,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react'
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoInformationCircleOutline } from "react-icons/io5";



const StartupForms = () => {
  const { isOpen, onToggle } = useDisclosure();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar la presentación del formulario
  };

  return (
    <Center>
      <Flex direction="row" align="center" gap={5} >
      <Flex direction="column" align="center">
      
        <Button
          as={Flex}
          direction="row"
          alignItems="center"
          bg="#000000"
          borderColor="#1FAFC8"
          borderWidth="1px"
          p={10}
          boxShadow="sm"
          width="230px"
          size="lg"
          borderRadius="20px"
          fontSize="16px"
          _hover={{ bg: '#1FAFC8' }}
          _active={{ bg: '#1FAFC8' }}
          onClick={onToggle}
        >
          <Icon as={BsFillRocketTakeoffFill} boxSize={12} marginRight={6} />
          <Box>
            <Text fontWeight="bold" fontSize="lg" color="white">
              Start-Up
            </Text>
            <Text fontWeight="bold" fontSize="lg" color="#737373">
              Registration
            </Text>
          </Box>
        </Button>

        <Collapse in={isOpen} animateOpacity>

          <Box
            p="60px"
            color="white"
            mt="4"
            bg="#000000"
            borderWidth="1px"
            rounded="lg"
        

          >
            <Heading>Start-Up Registration Form</Heading>
            <Text>*Form open to established startups and research that are taking the first steps towards a startup.</Text>
            <br />
            <form onSubmit={handleSubmit}>


              <FormControl isRequired>
                <FormLabel>Start-Up Name</FormLabel>
                <Input placeholder="Brand Name" />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Email" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Website or Social Media Profile</FormLabel>
                <Input placeholder="Website/Profile URL" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Startup Slogan</FormLabel>
                <Input placeholder="e.g. Biotechnology for Life" />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Short Description</FormLabel>
                <Textarea placeholder="Describe what your startup does in a paragraph" />
              </FormControl>

              <FormControl mt={4}>
                  <FormLabel>Upload Logo</FormLabel>
                  <InputGroup>
                    <Input type="file" placeholder="Upload Logo" />
                    <InputRightElement width="5rem">
                      <Button h="1.75rem" size="sm" colorScheme="teal">
                        Upload
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText>Recommended size 200x200 px</FormHelperText>
                </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Startup Status</FormLabel>
                <Select placeholder="Select status">
                  <option>Research stage</option>
                  <option>Early Start-Up</option>
                  <option>Pre-seed</option>
                  <option>Seed</option>
                </Select>
              </FormControl>
              {/* Campo para Madurez tecnológica */}
              <FormControl isRequired mt={4}>
                <FormLabel>Technology Readiness Level (TRL)</FormLabel>
                <Select placeholder="Select TRL">
                  <option>TRL-1: Basic principles</option>
                  <option>TRL-2: Technology concept formulated</option>
                  <option>TRL-3: Experimental proof of concept</option>
                  <option>TRL-4: Technology validated in lab</option>
                  <option>TRL-5: Technology validated in relevant environment</option>
                  <option>TRL-6 or higher</option>
                </Select>
                <FormHelperText>
                  Please describe the TRL level for your technology.
                </FormHelperText>
              </FormControl>

              {/* Campo para Nombre del representante o team leader */}
              <FormControl isRequired mt={4}>
                <FormLabel>Full Name of Legal Representative / Team Leader</FormLabel>
                <Input placeholder="Full Name" />
              </FormControl>

              {/* Campo para Detalles del representante o team leader */}
              <FormControl mt={4}>
                <FormLabel>Specialization Legal Representative / Team Leader</FormLabel>
                <Input placeholder="Specialization" />
              </FormControl>

              {/* Campo para Perfil de Linkedin o similar */}
              <FormControl isRequired mt={4}>
                <FormLabel>LinkedIn Profile of Legal Representative / Team Leader</FormLabel>
                <Input placeholder="LinkedIn Profile URL" />
              </FormControl>

              {/* Campo para Industria / sector productivo */}
              <FormControl isRequired mt={4}>
                <FormLabel>Industry / Productive Sector</FormLabel>
                <Select placeholder="Select Industry">
                  <option>HealthTech</option>
                  <option>Agri-foodTech</option>
                  <option>GreenTech</option>
                  <option>SyntheticTech</option>
                  <option>MiningTech</option>
                </Select>
              </FormControl>

              {/* Campo para País de origen */}
              <FormControl isRequired mt={4}>
                <FormLabel>Country of Origin</FormLabel>
                <Select placeholder="Select Country">
                <option>Argentina</option>
                <option>Brazil</option>
                <option>Mexico</option>
                <option>Colombia</option>
                <option>Peru</option>
                <option>Venezuela</option>
                <option>Chile</option>
                <option>Ecuador</option>
                <option>Guatemala</option>
                <option>Cuba</option>
                <option>Bolivia</option>
                <option>Dominican Republic</option>
                <option>Honduras</option>
                <option>Paraguay</option>
                <option>El Salvador</option>
                <option>Nicaragua</option>
                <option>Costa Rica</option>
                <option>Puerto Rico</option>
                <option>Uruguay</option>
                <option>Panama</option>
                <option>Jamaica</option>
                <option>Trinidad and Tobago</option>
                  {/* Agregar más países según sea necesario */}
                </Select>
              </FormControl>

              <Button type="submit" mt={4} colorScheme="teal">
                Submit
              </Button>
            </form>
          </Box>
        </Collapse>
        </Flex>
        <Flex direction="column" align="center">
          <Tooltip label="The information you enter in this form will be published for the sponsors." textColor="#FFFFFF" bg="#000000" fontSize="md" placement="right-start">
            <Box>
              <IoInformationCircleOutline size={25} color="#737373" />
            </Box>
          </Tooltip>
      </Flex>
      </Flex>
    </Center>
  );
};

export default StartupForms;
