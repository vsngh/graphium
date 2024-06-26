import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';

type PageProps = {};

const Page: React.FC<PageProps> = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm();

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data, null, 2));
      };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor='name'>First name</FormLabel>
        <Input
          id='name'
          placeholder='name'
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
    );
};
export default Page;
