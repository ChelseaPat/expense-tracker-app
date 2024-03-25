import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function TransactionForm({onClose, isOpen}) {
    const { formData, setFormData, value, setValue, handleFormSubmit } = useContext(GlobalContext);

    function handleFormChange(event) {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        handleFormSubmit(formData);
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Transaction</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input
                                placeholder="Enter Transaction description"
                                name="description"
                                type="text"
                                onChange={handleFormChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input
                                placeholder="Enter Transaction amount"
                                name="amount"
                                type="number"
                                onChange={handleFormChange}
                            />
                        </FormControl>
                        <RadioGroup mt={'5'} value={value} onChange={setValue}>
                            <Radio 
                            checked={formData.type === 'income'}
                                mr={'5'} 
                                value="income" 
                                colorScheme="blue" 
                                name="type"
                                onChange={handleFormChange}
                            >
                                Income
                            </Radio>
                            <Radio 
                                checked={formData.type === 'expense'}
                                mr={'5'} 
                                value="expense" 
                                colorScheme="red" 
                                name="type"
                                onChange={handleFormChange}
                            >
                                Expense
                            </Radio>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={'4'} onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type="submit">Add</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    );
}