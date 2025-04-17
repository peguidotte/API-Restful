import { Injectable } from '@nestjs/common';
import { userRepository } from './../user.repository';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailIsUniqueValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: userRepository) { }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const id = validationArguments?.object['id'];
        const userExists = await this.userRepository.existentEmail(value, id);
        return !userExists;
    }

}

export const EmailIsUnique = (validationOptions: ValidationOptions) => {
    return (object: Object, property: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: validationOptions,
            constraints: [],
            validator: EmailIsUniqueValidator,
        })
    }
}