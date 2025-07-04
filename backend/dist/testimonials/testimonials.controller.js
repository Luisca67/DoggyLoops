"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialsController = void 0;
const common_1 = require("@nestjs/common");
const testimonials_service_1 = require("./testimonials.service");
const create_testimonial_dto_1 = require("./dto/create-testimonial.dto");
const update_testimonial_dto_1 = require("./dto/update-testimonial.dto");
let TestimonialsController = class TestimonialsController {
    testimonialsService;
    constructor(testimonialsService) {
        this.testimonialsService = testimonialsService;
    }
    create(createTestimonialDto) {
        return this.testimonialsService.create(createTestimonialDto);
    }
    findAll() {
        return this.testimonialsService.findAll();
    }
    findAllAdmin() {
        return this.testimonialsService.findAllAdmin();
    }
    findOne(id) {
        return this.testimonialsService.findOne(+id);
    }
    update(id, updateTestimonialDto) {
        return this.testimonialsService.update(+id, updateTestimonialDto);
    }
    remove(id) {
        return this.testimonialsService.remove(+id);
    }
    approve(id) {
        return this.testimonialsService.approve(+id);
    }
};
exports.TestimonialsController = TestimonialsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_testimonial_dto_1.CreateTestimonialDto]),
    __metadata("design:returntype", void 0)
], TestimonialsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestimonialsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestimonialsController.prototype, "findAllAdmin", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestimonialsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_testimonial_dto_1.UpdateTestimonialDto]),
    __metadata("design:returntype", void 0)
], TestimonialsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestimonialsController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/approve'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestimonialsController.prototype, "approve", null);
exports.TestimonialsController = TestimonialsController = __decorate([
    (0, common_1.Controller)('testimonials'),
    __metadata("design:paramtypes", [testimonials_service_1.TestimonialsService])
], TestimonialsController);
//# sourceMappingURL=testimonials.controller.js.map