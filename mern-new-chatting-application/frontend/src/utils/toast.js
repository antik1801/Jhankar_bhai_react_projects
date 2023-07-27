
export const toast = (title, description, position ,status) => {
  return toast({
    title: title,
    description: description,
    status: status,
    duration: 5000,
    isClosable: true,
    position: position,
  });
};


